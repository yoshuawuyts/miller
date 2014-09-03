/**
 * Module dependencies
 */

var assert = require('assert');

/**
 * Create a validator function.
 *
 * @param {Object} schema
 * @return {Function}
 * @api public
 */

module.exports = function(schema) {
  assert('object' == typeof schema, 'Schema should be an object');

  return function(obj) {
    assert('object' == typeof obj, 'Obj should be an object');
    checkEqlProps(obj);
    checkEqlLength(obj);
    return obj;
  }

  function checkEqlProps(obj) {
    Object.keys(schema).forEach(function(key) {
      var type = schema[key];
      var target = obj[key];
      assert(type == typeof target, target + ' should be of type ' + type);
    });
  }

  function checkEqlLength(obj) {
    var schemaLn = Object.keys(schema).length;
    var objLn = Object.keys(obj).length;
    var lnErr = ''
    assert(objLn == schemaLn, 'Obj should not have extra properties');
  }
}
