var assert = require('..')
var ok = require('assert')

describe('assert()', function () {
  it('should throw when guard is falsy', function () {
    var err

    try {
      assert(false, 401, 'fail')
    } catch (e) {
      err = e
    }

    ok(err)
    ok(err.status === 401)
    ok(err.message === 'fail')
    ok(err.expose)
  })

  it('should not throw when guard is truthy', function () {
    assert(true, 401, 'fail')
  })

  it('should accept options for the error object', function () {
    var err

    try {
      assert(false, 401, 'fail', { expose: false })
    } catch (e) {
      err = e
    }

    ok(err)
    ok(err.status === 401)
    ok(err.message === 'fail')
    ok(!err.expose)
  })

  it('should not expose 5xx errors', function () {
    var err

    try {
      assert(false, 500)
    } catch (e) {
      err = e
    }

    ok(err)
    ok(err.status === 500)
    ok(err.message === 'Internal Server Error')
    ok(!err.expose)
  })

  it('should default to status code 500', function () {
    var err

    try {
      assert(false, 'fail')
    } catch (e) {
      err = e
    }

    ok(err)
    ok(err.status === 500)
    ok(err.message === 'fail')
    ok(!err.expose)
  })
})

describe('assert.equal()', function () {
  it('should throw when things aren\'t equal', function () {
    var err
    try {
      assert.equal('a', 'b', 401, 'fail')
    } catch (e) {
      err = e
    }

    ok(err)
    ok(err.status === 401)
    ok(err.message === 'fail')
  })

  it('should not throw when things are equal', function () {
    assert.equal(1, '1', 401, 'fail')
  })
})

describe('assert.notEqual()', function () {
  it('should throw when things are equal', function () {
    var err
    try {
      assert.notEqual('a', 'a', 401, 'fail')
    } catch (e) {
      err = e
    }

    ok(err)
    ok(err.status === 401)
    ok(err.message === 'fail')
  })

  it('should not throw when things aren\'t equal', function () {
    assert.notEqual(1, 11, 401, 'fail')
  })
})

describe('assert.ok()', function () {
  it('should throw when value is falsy', function () {
    var err
    try {
      assert.ok(false, 401, 'fail')
    } catch (e) {
      err = e
    }

    ok(err)
    ok(err.status === 401)
    ok(err.message === 'fail')
  })

  it('should not throw when value is truthy', function () {
    assert.ok(true, 401, 'fail')
  })
})

describe('assert.strictEqual()', function () {
  it('should throw when things aren\'t equal', function () {
    var err
    try {
      assert.strictEqual(1, '1', 401, 'fail')
    } catch (e) {
      err = e
    }

    ok(err)
    ok(err.status === 401)
    ok(err.message === 'fail')
  })

  it('should not throw when things are equal', function () {
    assert.strictEqual(1, 1, 401, 'fail')
  })
})

describe('assert.notStrictEqual()', function () {
  it('should throw when things are equal', function () {
    var err
    try {
      assert.notStrictEqual(1, 1, 401, 'fail')
    } catch (e) {
      err = e
    }

    ok(err)
    ok(err.status === 401)
    ok(err.message === 'fail')
  })

  it('should not throw when things aren\'t equal', function () {
    assert.notStrictEqual(1, '1', 401, 'fail')
  })
})

describe('assert.deepEqual()', function () {
  it('should throw when things aren\'t deeply equal', function () {
    var err
    try {
      assert.deepEqual({ a: 'a' }, { b: 'b' }, 401, 'fail')
    } catch (e) {
      err = e
    }

    ok(err)
    ok(err.status === 401)
    ok(err.message === 'fail')
  })

  it('should not throw when things are deeply equal', function () {
    assert.deepEqual({ a: 'a' }, { a: 'a' }, 401, 'fail')
  })
})

describe('assert.notDeepEqual()', function () {
  it('should throw when things aren\'t deeply equal', function () {
    var err
    try {
      assert.notDeepEqual({ a: 'a' }, { a: 'a' }, 401, 'fail')
    } catch (e) {
      err = e
    }

    ok(err)
    ok(err.status === 401)
    ok(err.message === 'fail')
  })

  it('should not throw when things are deeply equal', function () {
    assert.notDeepEqual({ a: 'a' }, { b: 'b' }, 401, 'fail')
  })
})
