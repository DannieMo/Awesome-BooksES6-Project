import { storeBook } from "./storage";

const addBook = (e, title, author, library) => {
  e.preventDefault();
  let updatedLib;
  if (title !== "" && author !== "") {
    library.push({ id: library.length + 1, title, author });
    updatedLib = [...library];
    storeBook(library);
  }
  return updatedLib;
};

export default addBook;
