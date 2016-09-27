var chai = require('chai');
var expect = require('chai').expect;
var Cart = require('./app/cart').Cart;

describe('Calculate', function() {

    let cart;

    beforeEach(function() {
        cart = new Cart();
    });

    it('Should work correctly', function() {
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