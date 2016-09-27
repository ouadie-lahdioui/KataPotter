var chai = require('chai');
var expect = require('chai').expect;
var cart = require('./app/cart');

describe('Sanitize', function() {
    it('returns lowercase of a string', function() {
        var inputWorld = 'hello world';
        var outputWord = cart.sanitize(inputWorld);

        expect(outputWord).to.equal('hello world');
        expect(outputWord).to.not.equal('HELLOW WORLD');
        expect(outputWord).to.be.a('string');
        expect(outputWord).to.not.be.a('number');
        expect(outputWord).to.contain('hello');
    });
});