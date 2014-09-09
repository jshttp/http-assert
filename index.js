var createError = require('http-errors');

module.exports = function (value, status, msg, opts) {
  if (value) return;
  throw createError(status, msg, opts);
}
