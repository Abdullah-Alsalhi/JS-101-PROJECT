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
  if (ID <= 0 || ID > id.length) {
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
        let position = i,
          quantity = quantityAvailable[position],
          priceOfBook = price[position];
        return {
          book: searchById(position + 1),
          quantity: quantity,
          price: priceOfBook,
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

function sellBook(bookRequested, quantityRequested, userBalance) {
  let chosenBook = searchByTitle(bookRequested),
    bookQuantity = chosenBook.quantity,
    bookPosition = chosenBook.quantityPosition,
    bookPrice = chosenBook.price,
    totalBill = quantityRequested * bookPrice;
  if (chosenBook == "Title not there") {
    return "No book available";
  } else {
    if (quantityRequested <= bookQuantity) {
      if (userBalance >= totalBill) {
        return `Your bill is ${totalBill}`;
      } else {
        return `Sorry you balance is low => bill: ${totalBill}`;
      }
    } else {
      return `we can't serve you with these ${quantityRequested} amount of books now!`;
    }
  }
}

module.exports = { searchById, searchByTitle, searchByAuthor, sellBook };
