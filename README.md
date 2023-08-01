<h1 align="center">
  <p>schema-doc-driven-development</p>
</h1>

<p align="center">
  <a href="https://github.com/facebook/docusaurus">
    <img
      src="https://img.shields.io/badge/@docusaurus-2.4.1-00DC82.svg?style=plastic"
      alt="@docusaurus Version Badge"
    />
  </a>
  <a href="https://github.com/rohit-gohri/redocusaurus">
    <img
      src="https://img.shields.io/badge/redocusaurus-1.6.3-00DC82.svg?style=plastic"
      alt="redocusaurus Version Badge"
    />
  </a>
  <a href="https://github.com/OpenAPITools/openapi-generator-cli">
    <img
      src="https://img.shields.io/badge/@openapitools/openapi--generator--cli-2.7.0-FFDC82.svg?style=plastic"
      alt="openapi-generator-cli Version Badge"
    />
  </a>
  <a href="https://github.com/Redocly/redocly-cli">
    <img
      src="https://img.shields.io/badge/redocly/cli-1.0.0-D3DC43.svg?style=plastic"
      alt="redocly-cli Version Badge"
    />
  </a>
  <a href="https://zenn.dev/gangannikki/books/schema-doc-driven-development" target="_blank">
    <img
      src="https://img.shields.io/badge/Zenn-Show_Books-0078D4.svg?style=plastic&logo=zenn"
      alt="Show Zenn books Button"
    />
  </a>
</p>

## About

Zenn で執筆した[OpenAPI + Redoc, Docusaurus, Mermaid で始めるスキーマ・ドキュメント駆動開発](https://zenn.dev/gangannikki/books/schema-doc-driven-development)本のサンプルです。

コメントなどあればこちらまでお願い致します。

https://zenn.dev/gangannikki/scraps/23b777186ddd04

## Installation

```sh
npm i
```

## Docusaurus

### Usage

```sh
npm run start
```

### Build

```sh
npm run build
```

## OpenAPI

### Preview: Local 参照

```sh
npm run prev:local
```

### Preview: URL 参照

```sh
npm run prev:url
```

### Bundle

[components](./openapi/components/)や[](./openapi/paths/)を結合するときに利用します。

```sh
npm run bundle
```

### Generate

```sh
npm run generate
```

## Prism

```sh
npm run start:mock
```
