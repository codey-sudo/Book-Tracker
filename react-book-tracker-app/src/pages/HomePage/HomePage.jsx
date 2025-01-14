// import { useState } from "react";
// import ButtonBase from "../../assets/components/ButtonBase/ButtonBase";
// import AddBookForm from "../../assets/components/AddBook/AddBookForm";
// import LibraryPage from "../LibraryPage/LibraryPage";
// import { useBooks } from "../../context/BooksContext"; // Import the useBooks hook

// function HomePage() {
//   const [showForm, setShowForm] = useState(false); // State to track form visibility
//   const { books, addBook } = useBooks(); // Access books and addBook function from the context

//   const handleCloseForm = () => {
//     setShowForm(false); // Close form without adding a book
//   };

//   return (
//     <>
//       {/* Show Add Book Form or Library based on books state */}
//       {books.length > 0 ? (
//         // If books are present, show the library page
//         <LibraryPage />
//       ) : (
//         <>
//           {/* Show Add Book button if no books are present */}
//           <ButtonBase onClick={() => setShowForm(true)}>
//             Add a New Book
//           </ButtonBase>
//           {showForm && (
//             <AddBookForm onAddBook={addBook} onClose={handleCloseForm} />
//           )}
//         </>
//       )}
//     </>
//   );
// }

// export default HomePage;

import { useState } from "react";
import ButtonBase from "../../assets/components/ButtonBase/ButtonBase";
import AddBookForm from "../../assets/components/AddBook/AddBookForm";
import LibraryPage from "../LibraryPage/LibraryPage";
import { useBooks } from "../../context/BooksContext"; // Import the useBooks hook

function HomePage() {
  const [showForm, setShowForm] = useState(false); // State to track form visibility
  const [showLibrary, setShowLibrary] = useState(false); // State to track library visibility
  const { books, addBook } = useBooks(); // Access books and addBook function from the context

  const handleAddBook = (newBook) => {
    addBook(newBook); // Add the new book to the context
    setShowForm(false); // Close the form after adding
  };

  const handleShowLibrary = () => {
    setShowLibrary(true); // Show the library page
  };

  const handleCloseForm = () => {
    setShowForm(false); // Close the form without adding
  };

  return (
    <>
      {/* Conditionally show the homepage buttons when not in the library */}
      {!showLibrary && (
        <>
          {/* Always show the "Add a New Book" button */}
          <ButtonBase onClick={() => setShowForm(true)}>
            Add a New Book
          </ButtonBase>

          {/* Conditionally render the "View Library" button if there are books */}
          {books.length > 0 && (
            <div style={{ marginTop: "10px" }}>
              <ButtonBase onClick={handleShowLibrary}>View Library</ButtonBase>
              {/* Add the "Add a New Book" button again here if needed */}
              {/* <ButtonBase
                onClick={() => setShowForm(true)}
                style={{ marginLeft: "10px" }}
              >
                Add a New Book
              </ButtonBase> */}
            </div>
          )}
        </>
      )}

      {showLibrary ? (
        // Render the LibraryPage when showLibrary is true
        <LibraryPage />
      ) : (
        // Home Page content: Show Add Book Form if needed
        <>
          {showForm && (
            <AddBookForm onAddBook={handleAddBook} onClose={handleCloseForm} />
          )}
        </>
      )}
    </>
  );
}

export default HomePage;
