<p align="center">
  <a href="">
    <img alt="Logo" src="logo.png" width="500px">
  </a>
</p>

<p align="center">
  Some quotes from federal legislators during the vote on impeachment.
</p>

<p align="center">

  <a href="https://codeship.com/projects/148266"><img alt="Build Status" src="https://codeship.com/projects/78185ac0-ec9c-0133-241f-56fc93ede3cf/status?branch=master"></a>

  <a href="https://travis-ci.org/mabrasil/brazilian-horror-story"><img alt="Build Status" src="https://travis-ci.org/mabrasil/brazilian-horror-story.svg?branch=master"></a>

  <a href="https://codeclimate.com/github/mabrasil/brazilian-horror-story"><img alt="Code Climate" src="https://codeclimate.com/github/mabrasil/brazilian-horror-story/badges/gpa.svg"/></a>

  <a href="https://david-dm.org/mabrasil/brazilian-horror-story" title="Dependency status"><img src="https://david-dm.org/mabrasil/brazilian-horror-story.svg"/></a>

  <a href="https://david-dm.org/mabrasil/brazilian-horror-story#info=devDependencies" title="devDependency status"><img src="https://david-dm.org/mabrasil/brazilian-horror-story/dev-status.svg"/></a>

</p>

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Node](#node)
  - [CLI](#cli)
- [Development](#development)
- [Contributing](#contributing)
- [Motivation](#motivation)
- [License](#license)

## Installation

### Node

```sh
$ npm install --save brazilian-horror-story
```

### CLI

```sh
$ npm install -g brazilian-horror-story
```

## Usage

<p align="center">
  <a href="">
    <img alt="Screenshot" src="" width="700px">
  </a>
</p>

### Node

```js
const quotes = require('brazilian-horror-story');

quotes();
```

returns an `Object` like this:

```json
  {
    "name": "Marco Feliciano",
    "party": "PSC-SP",
    "quote": "Com ajuda de Deus, pela minha família e pelo povo brasileiro, pelos evangélicos da nação toda, pelos meninos do MBL, pelo Vem pra Rua, dizendo que Olavo tem razão, dizendo tchau para essa querida, e dizendo tchau ao PT, partido das trevas, eu voto sim!"
  }
```

### CLI

![GIFs <3]()

All you got to do is:

```sh
$ brazilian-horror-story
```

#### Options

| **Option**  |               **Description**                |
|-------------|----------------------------------------------|
| `--help`    | Shows project description and how to use it. |
| `--version` | Displays the current version.                |

## Development

All the tasks needed for development automation are defined in the
[`package.json`](package.json) *scripts* property and can be run via:

`npm run <command>`

Here is a summary of all the commands:

|  **Command**  |                 **Description**                 |
|---------------|-------------------------------------------------|
| `compile`     | Runs the Livescript compiler on the source.     |
| `test`        | Runs [Mocha](https://mochajs.org/) in BDD mode. |
| `build`       | Runs both `compile` and `test` commands.        |

## Contributing

Contributions are very welcome! If you'd like to contribute, these
[guidelines](CONTRIBUTING.md) may help you.

## Motivation

¯\\\_(ツ)_/¯

## License

[brazilian-horror-story](https://github.com/mabrasil/brazilian-horror-story) is distributed under
the MIT License, available in this repository. All contributions are assumed to
be also licensed under the MIT License.
