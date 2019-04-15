const program = require('commander');

const collection = (val, memo) => {
  memo.push(val);
  return memo;
};

program
  .version('0.0.6')
  .usage('[options] <file ...>')
  .option('-f <tagfile>', 'Use the name specified by tagfile for the tag file. Default is "tags"', 'tags')
  .option('-n, --excmd=number', 'Equivalent to --excmd=number.')
  .option('-N, --excmd=pattern', 'Equivalent to --excmd=pattern.')
  .option('-o <tagfile>', 'Equivalent to -f tagfile.')
  .option('-p <path>', 'Use path as the default directory for each supplied source file')
  .option('-R, --recurse=yes', 'Equivalent to --recurse=yes.')
  .option('--exclude <pattern>', 'Add pattern to a list of excluded files and directories.', collection, ['node_modules/**/*'])
  .option('--excmd <cmd>', 'Determines the type of EX command used to locate tags in the source file.', /^(number|pattern)$/i, 'number')
  .option('--json', 'Output json format.')
  .option('--map <map>', 'Controls how file names are mapped to JavaScript language.', '.js.jsx')
  .option('--recurse <yes|no>', 'Recurse  into  directories encountered in the list of supplied files.', /^(yes|no)$/i, 'no')
  .option('--sort <yes|no>', 'Indicates whether the tag file should be sorted on the tag name', /^(yes|no)$/i, 'yes')
  .parse(process.argv);
