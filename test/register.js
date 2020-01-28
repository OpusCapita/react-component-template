require('@babel/register')();
require('raf/polyfill');
require('ignore-styles');
require('global-jsdom')(undefined, {
  url: 'http://localhost',
});
