#http-assert
Assert with status codes. Like ctx.throw() in Koa, but with a guard.

##Example
```js
var assert = require('http-assert');
var ok = require('assert');

try {
  assert(username == 'fjodor', 401, 'authentication failed');
} catch (err) {
  ok(err.status == 401);
  ok(err.message == 'authentication failed');
  ok(err.expose);
}
```

##Licence
MIT