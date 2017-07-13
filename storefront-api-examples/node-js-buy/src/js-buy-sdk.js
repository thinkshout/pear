import fetch from 'node-fetch';
import Client, {Config} from 'shopify-buy';

global.fetch = fetch;

const config = new Config({
  storefrontAccessToken: '702a455d5d8633f329950fa688c27cca',
  domain: 'we-care-for-p-ear.myshopify.com'
});

export default new Client(config);
