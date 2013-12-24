var assert = require('./');
var ok = require('assert');
var error;

try {
  assert(false, 400, 'fail');
} catch (err) {
  error = err;
  ok(err.message == 'fail');
  ok(err.status == 400);
  ok(err.expose);
}

ok(error);
console.log('All tests passed');