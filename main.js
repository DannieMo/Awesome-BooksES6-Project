// alert("Hellow world!");
// console.log(alert);
// Variables
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const button = document.querySelector('#btn');
const bookList = document.querySelector('#awesomebooks');

button.addEventListener('click', function () {
  if (titleInput.value == '' && authorInput.value == '') {
    alert('Pls enter your input');
  } else {
    const bookListRack = document.createElement('newBooks');

    const newTitle = document.createElement('newTitle');
    newTitle.innerHTML = titleInput.value;
    bookListRack.appendChild(newTitle);
    const newAuthor = document.createElement('newTitle');
    newAuthor.innerHTML = authorInput.value;
    bookListRack.appendChild(newAuthor);

    awesomebooks.appendChild(bookListRack);
  }
});
