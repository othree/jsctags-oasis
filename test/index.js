require('longjohn');

const async = require('async');
const format = require('util').format;
const path = require('path');
const glob = require('glob');
const os = require('os');

const bin = path.join(__dirname, '../bin/jsctags');
const dir = path.join(__dirname, 'cases');

const run = require('./run')({
  bin,
  dir
});

const files = ['js', 'jsx']
  .reduce((sum, ext) => {
    const pattern = format('test/cases/*.%s', ext);
    return sum.concat(
      glob.sync(pattern, {
        nosort: true,
        silent: true
      })
    );
  }, [])
  .map(name => {
    return {
      name,
      filename: path.resolve(process.cwd(), name)
    };
  });

async.forEachLimit(
  files,
  os.cpus().length,
  (f, fn) => {
    async.parallel(
      [
        async.apply(run, {
          cmd: format('-f - --json %s', f.name),
          filename: f.filename,
          ext: '.json',
          basedir: 'test/cases/'
        }),
        async.apply(run, {
          cmd: format('-f - --excmd=pattern %s', f.name),
          filename: f.filename,
          ext: '.pattern.tags',
          basedir: 'test/cases/'
        }),
        async.apply(run, {
          cmd: format('-f - %s', f.name),
          filename: f.filename,
          ext: '.number.tags',
          basedir: 'test/cases/'
        })
      ],
      fn
    );
  },
  err => {
    if (err) {
      throw err;
    }

    async.series([
      async.apply(run, {
        name: '-f - --excmd=pattern -R test/cases/',
        cmd: format('-f - --excmd=pattern -R %s', 'test/cases/'),
        ext: '.pattern.tags',
        basedir: 'test/cases/'
      }),
      async.apply(run, {
        name: '-f - --json -R test/cases/',
        cmd: format('-f - --json -R %s', 'test/cases/'),
        ext: '.json',
        basedir: 'test/cases/'
      }),
      async.apply(run, {
        name: '-f - --excmd=pattern -R test/ --exclude=...',
        cmd: format('-f - --excmd=pattern -R --exclude=test/clean.js --exclude=test/index.js --exclude=test/run.js %s', 'test/'),
        ext: '.pattern.tags',
        basedir: 'test/cases/'
      }),
      async.apply(run, {
        name: '-f - --excmd=pattern -R',
        cwd: path.resolve('test/cases/'),
        cmd: '-f - --excmd=pattern -R',
        ext: '.pattern.tags',
        basedir: ''
      }),
      async.apply(run, {
        name: '-f - --options=jsctags',
        cwd: path.resolve('test/cases/'),
        cmd: '-f - --excmd=pattern -R',
        ext: '.pattern.tags',
        basedir: ''
      })
    ]);
  }
);
