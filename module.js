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
  if (ID > bookStore[0].length) {
    return "ID is not there";
  } else {
    row = ID;
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
  let TitleName = bookStore[1];
  if (TitleName.includes(Title)) {
    for (let i = 0; i < TitleName.length; i++) {
      if (TitleName[i] == Title) {
        let position = i,
          quantity = bookStore[4][i],
          price = bookStore[3][i];
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
  let Authors = bookStore[2];
  for (Author of Authors) {
    if (Authors.includes(Author)) {
      let position = Author.indexOf(Author) + 1;
      return searchById(position);
    } else {
      return "Author is not there";
    }
  }
}

// function sellBook(bookTitle, quantity){

//   let chosenBook = searchByTitle(bookTitle)

//   if (chosenBook == "Title is not there"){
//     return "sorry book is not there"
//   }else if(quantity >= chosenBook.quantity){
//     // let bill = chosenBook.price * quantity
//     console.log(chosenBook.price)
//     // return `your bill is: $${bill}`
//   }
// }

// console.log(sellBook("Start  why", 3))

module.exports = { searchById, searchByTitle, searchByAuthor };
