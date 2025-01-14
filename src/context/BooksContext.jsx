import React, { createContext, useState, useContext, useEffect } from "react";

// Create a Context
const BooksContext = createContext();

// Create a Provider component
export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  // Load books from localStorage on initial load
  useEffect(() => {
    const storedBooks = localStorage.getItem("books");
    if (storedBooks) {
      setBooks(JSON.parse(storedBooks));
    }
  }, []);

  // Handle adding a new book and saving it to localStorage
  const addBook = (newBook) => {
    const updatedBooks = [...books, newBook];
    setBooks(updatedBooks);
    localStorage.setItem("books", JSON.stringify(updatedBooks)); // Save to localStorage
  };

  // Handle deleting a book and updating localStorage
  const deleteBook = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
    localStorage.setItem("books", JSON.stringify(updatedBooks)); // Update localStorage
  };

  return (
    <BooksContext.Provider value={{ books, addBook, deleteBook }}>
      {children}
    </BooksContext.Provider>
  );
};

// Custom hook to use the BooksContext
export const useBooks = () => {
  return useContext(BooksContext);
};
