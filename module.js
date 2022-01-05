function searchById(ID) {
  if (ID > bookStore[0].length) {
    return "ID is not there";
  } else {
    row = ID - 1;
    return `
    BookId:    ${bookStore[0][row]}
    bookTitle: ${bookStore[1][row]}
    author:    ${bookStore[2][row]}
    price:     $${bookStore[3][row]}
    quantity   ${bookStore[4][row]}
    `;
  }
}

function searchByTitle(Title) {
  TitleName = bookStore[1];
  for (i = 0; i < TitleName.length; i++) {
    if (TitleName.includes(Title)) {
      position = Title.indexOf(Title) + 1;
      return searchById(position);
    } else {
      return "Title is not there";
    }
  }
}

function searchByAuthor(Author) {
  Authors = bookStore[2];
  for (Author of Authors) {
    if (Authors.includes(Author)) {
      position = Author.indexOf(Author) + 1;
      return searchById(position);
    } else {
      return "Author is not there";
    }
  }
}

let id = [1],
  bookTitle = ["Start with why"],
  author = ["Simon Sinek"],
  price = [80],
  quantity = [13];

let bookStore = [id, bookTitle, author, price, quantity];

module.exports = { searchById, searchByTitle, searchByAuthor };
