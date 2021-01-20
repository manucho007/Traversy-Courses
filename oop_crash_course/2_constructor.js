// Constructor
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.getSummary = function () {
    return `${this.title} was written by ${this.author} on the year ${this.year}`;
  };
}

// Instantiate the object5
const book1 = new Book('Book 1', 'Manuel', 2015);
const book2 = new Book('Book 2', 'John', 2020);

// Get summary appears in the object itself
console.log(book1);
console.log(book1.getSummary());
console.log(typeof book1);
console.log(typeof Book);
