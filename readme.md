#http-assert
Assert with status codes. Like ctx.throw() in Koa, but with a guard.

##Example
```js
var assert = require('http-assert');
var ok = require('assert');

try {
  assert(username == 'fjodor', 400, 'wrong user');
} catch (err) {
  ok(err.status == 400);
  ok(err.message == 'wrong user');
  ok(err.expose);
}


// you can also pass custom options for the error object
try {
  assert(username == 'fjodor', 400, 'unable to authenticate you', {
  	expose: false, logReason: 'failed to reach auth provider'
  });
} catch (err) {
  ok(err.status == 400);
  ok(err.message == 'unable to authenticate you');
  ok(!err.expose);
  ok(err.logReason == 'failed to reach auth provider');
}
```

##Licence
MIT