var config = require('./config');

delete config.output;
delete config.devServer;

module.exports = config;
