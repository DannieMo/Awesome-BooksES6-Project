/* ======== Stores a list to localstorage ============= */
const storeBook = (items) => {
  const list = JSON.stringify(items);
  localStorage.setItem('bookshop', list);
};

/* ======== Gets a list from localstorage ============= */
const getBooks = () => {
  if (localStorage.getItem('bookshop')) {
    return JSON.parse(localStorage.getItem('bookshop'));
  }
  return [];
};

export default getBooks;
export { storeBook };
