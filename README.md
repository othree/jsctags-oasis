# jsctags-oasis

A forked project base on jsctags. Try to align the behavior of ctags as much as possible.

jsctags generator using [tern](https://github.com/marijnh/tern)

## Install

For access to the binary:

```sh
npm install -g jsctags-oasis
```

## Usage

```sh
Usage: help [options] <file ...>

Options:
  -a                   Equivalent to --append
  -f <tagfile>         Use the name specified by tagfile for the tag file. Default is "tags" (default: "tags")
  -L <file>            Read from file a list of file names for which tags should be generated.
  -n                   Equivalent to --excmd=number.
  -N                   Equivalent to --excmd=pattern.
  -o <tagfile>         Equivalent to -f tagfile.
  -p <path>            Use path as the default directory for each supplied source file.
  -R                   Equivalent to --recurse=yes.
  -u                   Equivalent to --sort=no.
  --append             Indicates whether tags generated from the specified files should be appended to those already present in the tag file or should replace them.
  --exclude <pattern>  Add pattern to a list of excluded files and directories. (default: ["node_modules/**/*"])
  --excmd <cmd>        Determines the type of EX command used to locate tags in the source file. (default: "number")
  --json               Output JSON format.
  --map <map>          Controls how file names are mapped to JavaScript language. (default: ".js.jsx")
  --optionss <map>     Controls how file names are mapped to JavaScript language. (default: ".js.jsx")
  --recurse <yes|no>   Recurse  into  directories encountered in the list of supplied files. (default: "no")
  --sort <yes|no>      Indicates whether the tag file should be sorted on the tag name (default: "yes")
  --help               Output usage information.
  --version            Output the version number.

```

## license

MIT
