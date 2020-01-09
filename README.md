# Polymer LitElement + TypeScript + Webpack

## Introduction
This is a sample project that implements some LitElement's web components (present in `src/components/`) in the TypeScript way. To do so it was necessary to add some simple configuration stuff while bundling with webpack:
- Add the `ts-loader` to read the TypeScript files
- Add the following options to the `compilerOptions` in the `tsconfig.json`:

  ```
  "experimentalDecorators": true,
  "target": "esnext",
  "moduleResolution": "node",
  ```
The `eslint` was also added to the project using the `@typescript-eslint/parser` parser and the `@typescript-eslint` plugin.

## Running

To install dependencies, cd indo the project directory and type (it's necessary to have `nodejs` and `npm` installed):
```
$ npm install
```

To run the project:
```
$ npm run start
```

To lint it:
```
$ npm run lint
```

## Contribute

Any contribution will be very welcome!
