import React, { useState } from "react";
import Styles from "./LibraryPage.module.css";
import BookList from "../../assets/components/BookList/BookList";
import AddBookForm from "../../assets/components/AddBook/AddBookForm";
import ButtonBase from "../../assets/components/ButtonBase/ButtonBase";
import { useBooks } from "../../context/BooksContext";
import { useLocation } from "react-router-dom";
// Import useBooks hook

function LibraryPage() {
  const { books, addBook, deleteBook } = useBooks(); // Access books and addBook and delete books from context
  const [isFormVisible, setIsFormVisible] = useState(false); // Track form visibility
  const location = useLocation();
  const { title, author, category } = location.state || {};

  const handleShowForm = () => {
    setIsFormVisible(true); // Show form when the plus button is clicked
  };

  return (
    <>
      <div className={Styles.contentWrapper}>
        {/* Show the form when the plus button is clicked */}
        {isFormVisible ? (
          <AddBookForm
            onAddBook={addBook} // Use addBook from context
            onClose={() => setIsFormVisible(false)} // Close form
          />
        ) : (
          <div className={Styles.library}>
            <h1>Library</h1>
            <BookList books={books} deleteBook={deleteBook} />{" "}
            {/* Display the books from context */}
            {/* Plus button to show the AddBookForm */}
            <ButtonBase onClick={handleShowForm} className={Styles.plusButton}>
              + Add a Book
            </ButtonBase>
          </div>
        )}
      </div>
    </>
  );
}

export default LibraryPage;
