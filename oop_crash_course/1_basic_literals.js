const s1 = 'Hello';
console.log(typeof s1);

const s2 = new String('Hello');
console.log(typeof s2);

// console.log(window);
// Should be window.navigator but window is the parent element so no need to include it
// console.log(navigator.appVersion);

// Object literal
const book1 = {
  title: 'Book 1',
  author: 'Manuel ROdriguez',
  year: 2021,
  getSummary: function () {
    return `${this.title} was written by ${this.author} on the year ${this.year}`;
  },
};
console.log(book1);
console.log(book1.getSummary());
console.log(Object.keys(book1));
console.log(Object.values(book1));
