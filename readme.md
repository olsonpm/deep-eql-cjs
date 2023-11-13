## What is this

A simple cjs wrapper to the [deep-eql](https://github.com/chaijs/deep-eql) module

## Why make a wrapper ?

Since version 5 of deep-eql, the module [only supports esm import](https://github.com/chaijs/deep-eql/pull/95).
In order to continue using this module conveniently I decided to wrap it in [fix-esm](https://www.npmjs.com/package/fix-esm).

## Why declare deep-eql as a peer dependency ?

Doing this allows you to decide the version of deep-eql in your project.
