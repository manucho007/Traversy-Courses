const posts = [
  { title: 'Post 1', body: 'This is post one' },
  { title: 'Post 2', body: 'This is post two' },
];
// Callback example
function getPosts() {
  setTimeout(() => {
    let output = '';
    posts.forEach((post, index) => {
      output += `<li>${index + 1} ${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

// The callback here refers to the function getPosts
function createPosts(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}

createPosts({ title: 'Post 3', body: 'This is post three' }, getPosts);
