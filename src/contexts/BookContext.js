import React, { createContext, useState } from "react";
import { v4 as uuid } from "uuid";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: "Updater", author: "Unkown", id: 1 },
    { title: "Disaster-Class Hero", author: "Unkown", id: 2 },
  ]);

  const addNewBook = (title, author) => {
    setBooks([...books, { title, author, id: uuid() }]);
  };

  const removeBook = (id) => {
    setBooks(
      books.filter((book) => {
        return book.id !== id;
      })
    );
  };

  return (
    <BookContext.Provider value={{ books, addNewBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
