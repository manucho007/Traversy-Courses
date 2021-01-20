// Object Of Protos
const bookProtos = {
  getSummary: function () {
    return `${this.title} was written by ${this.author} on the year ${this.year}`;
  },
  getAge: function () {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
  },
};

// Create boject
const book1 = Object.create(bookProtos);
book1.title = 'Awesome Book';
book1.author = 'Manuel Rodriguez';
book1.year = 2021;

const book2 = Object.create(bookProtos, {
  title: { value: 'Book 2' },
  author: { value: 'Manucho' },
  year: { value: 2019 },
});
console.log(book1);
console.log(book2.author);
