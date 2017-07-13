import fetch from 'node-fetch';
import Client from 'graphql-js-client';
import typeBundle from './types';

global.fetch = fetch;

export default new Client(typeBundle, {
  url: 'https://we-care-for-p-ear.myshopify.com/api/graphql',
  fetcherOptions: {
    headers: {
      'X-Shopify-Storefront-Access-Token': '702a455d5d8633f329950fa688c27cca'
    }
  }
});
