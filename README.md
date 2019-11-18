# Env type [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/env-type/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/env-type)

Get the type of environment the script is running in.

[![NPM Badge](https://nodei.co/npm/env-type.png)](https://npmjs.com/package/env-type)

## Install

```sh
npm install env-type
```

## Usage

```js
const envType = require("env-type");

envType
//=> 'node' (When using NodeJS)
```

## API

### envType

Type: `"browser" | "worker" | "node" | undefined`

The type of environment the script is running in.
