var http = require('http');

module.exports = function (value, status, msg, opts) {
  if (value) return;
  
  if (typeof status != 'number') {
    opts = msg;
    msg = status;
    status = 500;
  }
  
  if (typeof msg != 'string') {
    opts = msg;
    msg = http.STATUS_CODES[tmp];
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