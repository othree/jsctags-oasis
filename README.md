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
Usage: jsctags [options] <file ...>

Options:
  -V, --version        output the version number
  -f <tagfile>         Use the name specified by tagfile for the tag file. Default is "tags" (default: "tags")
  -n, --excmd=number   Equivalent to --excmd=number.
  -N, --excmd=pattern  Equivalent to --excmd=pattern.
  -o <tagfile>         Equivalent to -f tagfile.
  -p <path>            Use path as the default directory for each supplied source file
  -R, --recurse=yes    Equivalent to --recurse=yes.
  --exclude <pattern>  Add pattern to a list of excluded files and directories. (default: ["node_modules/**/*"])
  --excmd <cmd>        Determines the type of EX command used to locate tags in the source file. (default: "number")
  --json               Output json format.
  --map <map>          Controls how file names are mapped to JavaScript language. (default: ".js.jsx")
  --recurse <yes|no>   Recurse  into  directories encountered in the list of supplied files. (default: "no")
  --sort <yes|no>      Indicates whether the tag file should be sorted on the tag name (default: "yes")
  -h, --help           output usage information
```

## license

MIT
