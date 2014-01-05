var http = require('http');

module.exports = function (value, status, msg, opts) {
  if (value) return;
  // https://github.com/koajs/koa/blob/master/lib/context.js
  if ('number' == typeof msg) {
    var tmp = msg;
    msg = status || http.STATUS_CODES[tmp];
    status = tmp;
  }

  var err = new Error(msg);
  err.status = status || 500;
  err.expose = true;
  if (opts) merge(err, opts);
  throw err;
}

function merge (a, b) {
  for (var p in b) {
    if (b.hasOwnProperty(p)) a[p] = b[p];
  }
}