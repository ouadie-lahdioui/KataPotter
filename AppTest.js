var chai = require('chai');
var expect = require('chai').expect;
var cart = require('./app/cart');

describe('Test', function() {
    it('Should confirm tha is work correctly', function() {
        // Given
        // When
        // Then
        expect('harry potter is back').to.equal('harry potter is back');
    });

    it('Should call calculate', function () {
        // Given
        // When
        // Then
        expect(cart.calculate()).to.equal(0);
    });
});