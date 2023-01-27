import time from './modules/dateTime.js';
import getBooks, { storeBook } from './modules/storage.js';

/*= == Containers === */
const books = document.querySelector('.mybooks');
const form = document.querySelector('.form');
const contacts = document.querySelector('.contacts');

/* Switch between sectionos */
const renderSection = (e) => {
  // eslint-disable-next-line default-case
  switch (e.target.id) {
    case 'contacts':
      contacts.classList.remove('hidden');
      books.classList.add('hidden');
      form.classList.add('hidden');
      return;

    case 'form':
      contacts.classList.add('hidden');
      books.classList.add('hidden');
      form.classList.remove('hidden');
      return;

    case 'mybooks':
      contacts.classList.add('hidden');
      form.classList.add('hidden');
      books.classList.remove('hidden');
      // eslint-disable-next-line no-useless-return
      return;
  }
};

const navBtns = document.querySelectorAll('.navitems');
navBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => renderSection(e));
});

const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const button = document.querySelector('#btn');
const bookList = document.querySelector('#awesomebooks');

const bookStore = getBooks();

const addBook = (e, title, author, library) => {
  e.preventDefault();
  let updatedLib;
  if (title !== '' && author !== '') {
    library.push({ id: library.length + 1, title, author });
    updatedLib = [...library];
    storeBook(library);
  }
  return updatedLib;
};

const removeBook = (e, id, library) => {
  e.preventDefault();

  let filter;
  if (library.length) {
    filter = library.filter((el) => el.id !== id);
    storeBook(filter);
    // eslint-disable-next-line no-use-before-define
    displayBook(getBooks(), bookList);
  }
  return filter;
};

const displayBook = (list, container) => {
  container.innerText = '';
  if (list.length) {
    const ul = document.createElement('ul');
    list.forEach((el) => {
      const li = document.createElement('li');
      const trash = document.createElement('span');
      trash.innerHTML = `<i id=${el.id} class="fa-sharp fa-solid fa-trash"></i>`;
      trash.addEventListener('click', (e) => {
        removeBook(e, el.id, getBooks());
        // displayTasks(listArray, container);
      });
      li.setAttribute('id', el.id);
      li.innerHTML = `Author: ${el.author} Title: ${el.title}`;
      li.append(trash);
      ul.append(li);
    });
    container.append(ul);
  }
  return container;
};

const addStuff = (e) => {
  addBook(e, titleInput.value, authorInput.value, bookStore);
  displayBook(bookStore, bookList);
  titleInput.value = '';
  authorInput.value = '';
  titleInput.focus();
};

button.addEventListener('click', (e) => {
  addStuff(e);
});

document.addEventListener('keypress', (e) => {
  if (e.keyCode === 13) {
    addStuff(e);
  }
});

window.onload = () => {
  contacts.classList.add('hidden');
  books.classList.remove('hidden');
  form.classList.add('hidden');
  displayBook(bookStore, bookList);
  time();
};
