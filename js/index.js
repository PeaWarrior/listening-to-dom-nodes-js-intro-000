// using this file is optional
// you can also load the code snippets in using your browser's console
const main = document.getElementsById('main');

main.addEventListener('click', function(event) {
  alert ('I was clicked!'0);
});

const input = document.querySelector('input');

input.addEventListener('keydown', function(e) {
  console.log(e.key);
});
