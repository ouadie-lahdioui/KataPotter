var chai = require('chai');
var expect = require('chai').expect;
var Cart = require('./app/cart').Cart;
var BOOKS = require('./app/cart').BOOKS;
var BOOK_PRICE = require('./app/cart').BOOK_PRICE;

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

    it('Should return zero when no book is given', function () {
        // Given
        let books = [];

        // When
        let price = cart.calculate(books);

        // Then
        expect(price).to.equal(0);
    });

    it('Should return the price of one book when one book is given', function () {
        // Given
        let books = [BOOKS.A];

        // When
        let price = cart.calculate(books);

        // Then
        expect(price).to.equal(BOOK_PRICE);
    });

    it('Should return the price of two same books when two same books are given', function () {
        // Given
        let books = [BOOKS.A, BOOKS.A];

        // When
        let price = cart.calculate(books);

        // Then
        expect(price).to.equal(BOOK_PRICE * 2);
    });

    it('Should return the price of a lot of the same books when a lot of the same books are given', function () {
        // Given
        let threeBooks = [BOOKS.A, BOOKS.A, BOOKS.A];
        let fourBooks = [BOOKS.A, BOOKS.A, BOOKS.A, BOOKS.A];
        let fiveBooks = [BOOKS.A, BOOKS.A, BOOKS.A, BOOKS.A, BOOKS.A];

        // When - Then
        expect(cart.calculate(threeBooks)).to.equal(BOOK_PRICE * threeBooks.length);
        expect(cart.calculate(fourBooks)).to.equal(BOOK_PRICE * fourBooks.length);
        expect(cart.calculate(fiveBooks)).to.equal(BOOK_PRICE * fiveBooks.length);
    });

});