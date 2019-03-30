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
  -p <path>            Use path as the default directory for each supplied source file
  -n, --excmd=number   Equivalent to --excmd=number.
  -N, --excmd=pattern  Equivalent to --excmd=pattern.
  -R, --recurse=yes    Equivalent to --recurse=yes.
  -f <file>            Use the name specified by tagfile for the tag file. Default is "tags" (default: null)
  --exclude <pattern>  Add pattern to a list of excluded files and directories. (default: [])
  --excmd <cmd>        Determines the type of EX command used to locate tags in the source file. (default: "pattern")
  --json               Output json format.
  --recurse <yes|no>   Recurse  into  directories encountered in the list of supplied files. (default: "no")
  -h, --help           output usage information
```

## license

MIT
