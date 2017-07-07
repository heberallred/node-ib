var assert = require('assert');

var _ = require('lodash');

module.exports = function (conId, exchange) {
  assert(_.isString(symbol), 'Symbol must be a string.');

  return {
    conId: conId,
    exchange: exchange || 'SMART',
  };
};
