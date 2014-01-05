var assert = require('./');
var ok = require('assert');
var error;

try {
  assert(false, 401, 'fail');
} catch (err) {
  ok(err.status == 401);
  ok(err.message == 'fail');
  ok(err.expose);
}

try {
  assert(false, 401, 'fail', { expose: false });
} catch (err) {
  error = err;
  ok(err.status == 401);
  ok(err.message == 'fail');
  ok(!err.expose);
}

ok(error);
console.log('All tests passed');