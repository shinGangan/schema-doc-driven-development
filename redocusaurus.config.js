// @ts-check

// @ts-ignore
const spec = require("./package.json").config.source_url;

/**
 * API Docsのパス
 * @type {string}
 */
const route = "/api";

/**
 * @type {import('redocusaurus').PresetOptions["specs"]}
 * @example
 * [
 *   // case1: Pass the path to the local OpenAPI YAML file.
 *   {
 *     spec: "'./openapi/openapi.yaml'",
 *     route: "/api_1"
 *   },
 *   // case2: Pass the URL for the OpenAPI spec.
 *   {
 *     spec: "https://redocly.github.io/redoc/openapi.yaml",
 *     route: "/api_2"
 *   }
 * ]
 */
const specs = [
  {
    spec,
    route,
  },
];

/**
 * redocusaurusの設定
 * @see {@link https://redocusaurus.vercel.app/docs/getting-started/Installation | 公式Docs}
 * @type {import('redocusaurus').PresetEntry}
 */
const config = [
  "redocusaurus",
  {
    specs,
    theme: {
      primaryColor: "#1890ff",
    },
  },
];

/**
 * navbar.items に追加する項目
 * @type {import('@docusaurus/preset-classic').ThemeConfig["navbar"]["items"][0]}
 */
const specItems = {
  label: "API Docs",
  position: "left",
  to: route,
};

module.exports = { config, specItems };
