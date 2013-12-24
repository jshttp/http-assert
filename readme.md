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
```

##Licence
MIT