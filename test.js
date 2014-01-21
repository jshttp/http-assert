var assert = require('./');
var ok = require('assert');

describe('assert()', function () {
  it('should throw when guard is falsy', function () {
    var err;
    
    try {
      assert(false, 401, 'fail');
    } catch (e) {
      err = e;
    }
    
    ok(err);
    ok(err.status == 401);
    ok(err.message == 'fail');
    ok(err.expose);
  })
  
  it('should not throw when guard is truthy', function () {
    assert(true, 401, 'fail');
  })
  
  it('should accept options for the error object', function () {
    var err;
    
    try {
      assert(false, 401, 'fail', { expose: false });
    } catch (e) {
      err = e;
    }
    
    ok(err);
    ok(err.status == 401);
    ok(err.message == 'fail');
    ok(!err.expose);
  })
  
  it('should not expose 5xx errors', function () {
    var err;
    
    try {
      assert(false, 500);
    } catch (e) {
      err = e;
    }
    
    ok(err);
    ok(err.message == 'Internal Server Error');
    ok(!err.expose);
  });
  
  it('should default to status code 500', function () {
    var err;
    
    try {
      assert(false, 'fail');
    } catch (e) {
      err = e;
    }
    
    ok(err);
    ok(err.status == 500);
    ok(err.message == 'fail');
    ok(!err.expose);
  });
})