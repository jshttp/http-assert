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

try {
  assert(false, 301, 'unable to authenticate you', {
  	expose: false, logReason: 'failed to reach auth provider'
  });
} catch (err) {
  ok(err.status == 301);
  ok(err.message == 'unable to authenticate you');
  ok(!err.expose);
  ok(err.logReason == 'failed to reach auth provider');
}

ok(error);
console.log('All tests passed');