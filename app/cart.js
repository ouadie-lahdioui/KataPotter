const BOOK_PRICE = 8;
const BOOKS = {
    A: 'A',
    B: 'B',
    C: 'C',
    D: 'D'
}

class Cart {

    calculate(books) {
        return books.length * 8;
    }

}

exports.BOOKS = BOOKS;
exports.BOOK_PRICE = BOOK_PRICE;
exports.Cart = Cart;
