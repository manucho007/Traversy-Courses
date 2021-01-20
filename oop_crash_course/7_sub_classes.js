class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  getSummary() {
    return `${this.title} was written by ${this.author} on the year ${this.year}`;
  }
}

// Magazine subclass
class Magazine extends Book {
  constructor(title, author, year, month) {
    // Super call the parent constructor
    super(title, author, year);
    this.month = month;
  }
}

// Instantiate Magazine
const mag1 = new Magazine('Mag One', 'Manuel Rodriguez', 2021, 'January');

console.log(mag1);
console.log(mag1.getSummary());
console.log(typeof mag1);
