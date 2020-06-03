const posts = [
  { title: 'Post 1', body: 'This is post one' },
  { title: 'Post 2', body: 'This is post two' },
];

function getPosts() {
  setTimeout(() => {
    let output = '';
    posts.forEach((post, index) => {
      output += `<li>${index + 1} ${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 500);
}

function printFoo() {
  setTimeout(() => console.log('Foo'), 1000);
}

function createPosts(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject('Error: Something went wrong');
      }
    }, 1000);
  });
}

// Chaining functions to a promise
// createPosts({ title: 'Post 3', body: 'This is post three' })
//   .then(getPosts)
//   .then(printFoo)
//   .catch((err) => console.log(err));

// Promise.all
const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) =>
  setTimeout(resolve, 2000, 'Goodbye')
);
const promise4 = fetch(
  'https://jsonplaceholder.typicode.com/users'
).then((res) => res.json());

Promise.all([promise1, promise2, promise3, promise4]).then((values) =>
  console.log('Promise.all', values)
);

// Async / Await
// async waits for an asynchronous action to complete
async function init() {
  await createPosts({ title: 'Post 3', body: 'This is post three' });
  getPosts();
}
init();

// Async  / Await / Fetch
async function fetchUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  console.log('Async Await with Fetch', data);
}
fetchUsers();
