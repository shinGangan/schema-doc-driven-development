# schema-doc-driven-development

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
