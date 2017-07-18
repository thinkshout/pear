'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

var _graphqlJsClient = require('graphql-js-client');

var _graphqlJsClient2 = _interopRequireDefault(_graphqlJsClient);

var _types = require('./types');

var _types2 = _interopRequireDefault(_types);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

global.fetch = _nodeFetch2.default;

exports.default = new _graphqlJsClient2.default(_types2.default, {
  url: 'https://we-care-for-p-ear.myshopify.com/api/graphql',
  fetcherOptions: {
    headers: {
      'X-Shopify-Storefront-Access-Token': '702a455d5d8633f329950fa688c27cca'
    }
  }
});