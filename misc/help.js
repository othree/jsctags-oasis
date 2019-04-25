const program = require('commander');

const collection = (val, memo) => {
  memo.push(val);
  return memo;
};

program
  .version('0.0.6')
  .usage('[options] <file ...>')
  .option('-a', 'Equivalent to --append')
  .option('-f <tagfile>', 'Use the name specified by tagfile for the tag file. Default is "tags"', 'tags')
  .option('-L <file>', 'Read from file a list of file names for which tags should be generated.')
  .option('-n', 'Equivalent to --excmd=number.')
  .option('-N', 'Equivalent to --excmd=pattern.')
  .option('-o <tagfile>', 'Equivalent to -f tagfile.')
  .option('-p <path>', 'Use path as the default directory for each supplied source file.')
  .option('-R', 'Equivalent to --recurse=yes.')
  .option('-u', 'Equivalent to --sort=no.')
  .option('--append', 'Indicates whether tags generated from the specified files should be appended to those already present in the tag file or should replace them.', false)
  .option('--exclude <pattern>', 'Add pattern to a list of excluded files and directories.', collection, ['node_modules/**/*'])
  .option('--excmd <cmd>', 'Determines the type of EX command used to locate tags in the source file.', /^(number|pattern)$/i, 'number')
  .option('--json', 'Output JSON format.')
  .option('--map <map>', 'Controls how file names are mapped to JavaScript language.', '.js.jsx')
  .option('--optionss <file>', 'Read additional options from file.', collection, [])
  .option('--recurse <yes|no>', 'Recurse  into  directories encountered in the list of supplied files.', /^(yes|no)$/i, 'no')
  .option('--sort <yes|no>', 'Indicates whether the tag file should be sorted on the tag name', /^(yes|no)$/i, 'yes')
  .parse(process.argv);
