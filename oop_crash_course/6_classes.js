class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  getSummary() {
    return `${this.title} was written by ${this.author} on the year ${this.year}`;
  }
  getAge() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
  }
  revise(newYear) {
    this.year = newYear;
    this.revised = true;
  }
  static topBookStores() {
    return 'Barnes & Noble';
  }
}

// Instantiate Object
const book1 = new Book('Book 1', 'Manuel Rodriguez', 2021);
console.log(book1);
book1.revise(2013);
console.log(book1);
console.log(Book.topBookStores());
console.log(typeof book1);
