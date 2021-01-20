// Constructor
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

//   Get summary
Book.prototype.getSummary = function () {
  return `${this.title} was written by ${this.author} on the year ${this.year}`;
};

//   Magazine constructor
function Magazine(title, author, year, month) {
  Book.call(this, title, author, year);
  this.month = month;
}

// Inherit Prototype function from Book
Magazine.prototype = Object.create(Book.prototype);

//   Instantiate magazine object
const mag1 = new Magazine('Mag 1', 'Manuel', 2018, 'Jan');

console.log(Magazine.prototype.constructor);
// Change contructor of Magazine from book to Magazine
Magazine.prototype.constructor = Magazine;

console.log(Magazine.prototype.constructor);
console.log(mag1);
console.log(mag1.getSummary());
