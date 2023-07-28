<!-- /scripts/generate.md -->

# generate scripts

## About

### What's this script?

OpenAPI Generator CLI を用いて Controller, Model を自動生成するスクリプトです.

## Usage

`npm install` 未実施の場合は下記実行前に行なってください.

```
npm run generate
```

## Config

共通の設定値や事前準備用関数をまとめておくと良さそう.

```js
const source = require("../package.json").config.source_local;

/**
 * @typedef Config
 * @property {string} generatorName - openapi-generator-cliのジェネレーター名
 * @property {string} outputDirPath - 出力先のパス
 * @property {string=} apiPackage - APIのパッケージ名
 * @property {string=} modelPackage - モデルのパッケージ名
 * @property {Record<string, string>=} additionalProperties - 追加のプロパティ
 */
/** @type {Config} */
const config = {
  generatorName: "typescript-axios",
  outputDirPath: "./output",
  apiPackage: "/api",
  modelPackage: "/model",
  additionalProperties: {
    supportsES6: "true",
    withSeparateModelsAndApi: "true",
  },
};
```

## Func

```js
/**
 * additionalPropertiesを結合させる関数
 * @param {Config["additionalProperties"]} target
 * @returns {string}
 */
const concatAdditionalProperties = (target) => {
  /** @type {string[]} */
  const _options = [];
  for (const [key, value] of Object.entries(target)) {
    _options.push(`${key}=${value}`);
  }
  console.log("options: ", _options);
  return _options.join(",");
};
```

## Run

実行スクリプト.

```js
await $`openapi-generator-cli version-manager set 6.6.0 & \
  openapi-generator-cli generate \
  -g ${config.generatorName} \
  -i ${source} \
  -o ${config.outputDirPath} \
  --api-package ${config.apiPackage} \
  --model-package ${config.modelPackage} \
  --additional-properties ${concatAdditionalProperties(
    config.additionalProperties
  )}`;
```
