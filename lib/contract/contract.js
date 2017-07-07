var assert = require('assert');

var _ = require('lodash');

module.exports = function (conId, exchange) {
  return {
    conId: conId,
    exchange: exchange || 'SMART',
  };
};
