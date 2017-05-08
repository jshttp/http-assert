unreleased
==========

  * deps: deep-equal@~1.0.1
    - Fix `null == undefined` for non-strict compares
  * deps: http-errors@~1.6.1
    - Accept custom 4xx and 5xx status codes in factory
    - Deprecate using non-error status codes
    - Make `message` property enumerable for `HttpError`s
    - Support new code `421 Misdirected Request`
    - Use `setprototypeof` module to replace `__proto__` setting
    - deps: inherits@2.0.3
    - deps: setprototypeof@1.0.3
    - deps: statuses@'>= 1.3.1 < 2'
    - perf: enable strict mode

2016-02-27 / 1.2.0
==================

  * deps: http-errors@~1.4.0

2015-02-13 / 1.1.1
==================

  * deps: deep-equal@~1.0.0
  * dpes: http-errors@~1.3.1

2014-12-10 / 1.1.0
==================

  * Add equality methods
    - `assert.deepEqual()`
    - `assert.equal()`
    - `assert.notDeepEqual()`
    - `assert.notEqual()`
    - `assert.notStrictEqual()`
    - `assert.strictEqual()`

2014-09-10 / 1.0.2
==================

  * Fix setting `err.expose` on invalid status
  * Use `http-errors` module
  * perf: remove duplicate status check

2014-01-20 / 1.0.1
==================

  * Fix typo causing `err.message` to be `undefined`

2014-01-20 / 1.0.0
==================

  * Default status to 500
  * Set `err.expose` to `false` for 5xx codes
