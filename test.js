/*eslint no-unused-expressions: 0*/

/**
 * Module dependencies
 */

var should = require('should');
var miller = require('./index');

/**
 * Test
 */

describe('miller()', function() {
  it('should catch errors', function() {
    miller.bind(miller, 123)
      .should.throw('Schema should be an object');
  });

  it('should return a function', function() {
    miller({}).should.be.of.type('function');
  });
});

describe('miller()()', function() {
  it('should catch errors', function() {
    var schema = miller({});
    schema.bind(schema, 123)
      .should.throw('Obj should be an object');
  });

  it('should check property equality', function() {
    var schema = miller({
      foo: 'string',
      bar: 'number'
    });

    schema.bind(schema, {
      foo: 123,
      bar: 789
    }).should.throw('123 should be of type string');

    schema({
      foo: 'hi',
      bar: 123
    });
  });

  it('should check for surplus properties', function() {
    var schema = miller({
      foo: 'string',
      bar: 'number'
    });

    schema.bind(schema, {
      foo: 'baz',
      bar: 789,
      uh: 'oh'
    }).should.throw('Obj should not have extra properties');

    schema.bind(schema, {
      foo: 'baz',
      bar: 789
    }).should.not.throw('Obj should not have extra properties');
  });
});
