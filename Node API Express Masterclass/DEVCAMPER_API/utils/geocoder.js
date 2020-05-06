const NodeGeocoder = require('node-geocoder');
var options = {
  provider: process.env.GEOCODER_PROVIDER,
  httpAdapters: 'https',
  apiKey: process.env.GEOCODER_API_KEY,
  formatter: null,
};

const geocoder = NodeGeocoder(options);
module.exports = geocoder;
