import React from "react";
import Styles from "./BookItem.module.css";

function BookItem({ book, onDelete }) {
  return (
    <li>
      <h3>Title:{book.Title}</h3>
      <p>Author: {book.Author}</p>
      <p>Category: {book.Category}</p>
      {/* Delete button */}
      <button onClick={() => onDelete(book.id)}>Delete</button>
    </li>
  );
}

export default BookItem;
