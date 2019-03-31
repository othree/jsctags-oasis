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
          ext: '.json'
        }),
        async.apply(run, {
          cmd: format('-f - %s', f.name),
          filename: f.filename,
          ext: '.tags'
        })
      ],
      fn
    );
  },
  err => {
    if (err) {
      throw err;
    }

    const names = files.map(f => {
      return f.name;
    });

    async.series([
      async.apply(run, {
        name: '-f - -R test/cases/',
        cmd: format('-f - -R %s', 'test/cases/'),
        ext: '.tags'
      }),
      async.apply(run, {
        name: '-f - --json -R test/cases/',
        cmd: format('-f - --json -R %s', 'test/cases/'),
        ext: '.json'
      }),
      async.apply(run, {
        name: '-f - -R test/ --exclude=...',
        cmd: format('-f - -R --exclude=test/clean.js --exclude=test/index.js --exclude=test/run.js %s', 'test/'),
        ext: '.tags'
      }),
      async.apply(run, {
        name: '-f - -R',
        cwd: path.resolve('test/cases/'),
        cmd: '-f - -R',
        ext: '.tags'
      })
    ]);
  }
);
