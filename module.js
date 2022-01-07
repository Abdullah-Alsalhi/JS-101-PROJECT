let id = [1, 2, 3, 4, 5],
  bookTitle = [
    "Start with why",
    "But how do it know",
    "Clean Code",
    "Zero to One",
    "You don't know JS",
  ],
  author = [
    "Simon Sinek",
    "J. Clark Scott",
    "Robert Cecil Martin",
    "Peter Thiel",
    "Kyle Simpson",
  ],
  price = [80.0, 59.9, 50.0, 45.0, 39.9],
  quantityAvailable = [13, 22, 5, 12, 9];

let bookStore = [id, bookTitle, author, price, quantityAvailable];

function searchById(ID) {
  if (ID <= (id.length - id.length) || ID > id.length) {
    return "ID is not there";
  } else {
    row = ID - 1;
    return `
    BookId:    ${id[row]}
    bookTitle: ${bookTitle[row]}
    author:    ${author[row]}
    price:     $${price[row]}
    quantity   ${quantityAvailable[row]}
    `;
  }
}

function searchByTitle(Title) {
  if (bookTitle.includes(Title)) {
    for (let i = 0; i < bookTitle.length; i++) {
      if (bookTitle[i] == Title) {
        let position = i + 1,
          quantity = bookStore[4][position],
          price = bookStore[3][position];
        return {
          book: searchById(position),
          quantity: quantity,
          price: price,
          quantityPosition: position,
        };
      }
    }
  } else {
    return "Title not there";
  }
}

function searchByAuthor(Author) {
  if (author.includes(Author)) {
    let index = 1;
    for (writer of author) {
      if (Author == writer) {
        return searchById(index);
      } else {
        index += 1;
      }
    }
  } else {
    return "Author is not there";
  }
}

module.exports = { searchById, searchByTitle, searchByAuthor };
