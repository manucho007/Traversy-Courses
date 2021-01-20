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

// Get age
Book.prototype.getAge = function () {
  const years = new Date().getFullYear() - this.year;
  return `${this.title} is ${years} years old`;
};

Book.prototype.revise = function (newYear) {
  this.year = newYear;
  this.revised = true;
};

// Instantiate the object5
const book1 = new Book('Book 1', 'Manuel', 2015);
const book2 = new Book('Book 2', 'John', 2020);

// get summary no longer appears in the object, but it appear in the __proto from the object
console.log(book1);
console.log(book1.getSummary());
console.log(book1.getAge());
book1.revise(2018);
console.log(book1);
