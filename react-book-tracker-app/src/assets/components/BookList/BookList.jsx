import React from "react";
import BookItem from "../BookItem/BookItem";
import Styles from "./BookList.module.css";

function BookList({ books, className, deleteBook }) {
  if (books.length === 0) {
    return <p>No books in the library yet. Add some!</p>;
  }
  return (
    <ul className={`${Styles.ul} ${className}`}>
      {books.map((book) => (
        <BookItem
          key={book.id}
          book={book}
          onDelete={deleteBook} // Make sure onDelete is passed here
        />
      ))}
    </ul>
  );
}

export default BookList;
