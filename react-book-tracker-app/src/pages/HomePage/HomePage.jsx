// import { useState } from "react";
// import Container from "../../assets/components/Container/Container";
// import ButtonBase from "../../assets/components/ButtonBase/ButtonBase";
// import Header from "../../assets/components/Header/Header";
// import AddBookForm from "../../assets/components/AddBook/AddBookForm";
// import LibraryPage from "../LibraryPage/LibraryPage";

// function HomePage() {
//   const [showForm, setShowForm] = useState(false);
//   const [books, setBooks] = useState([]); // State to track books

//   const handleAddBook = (newBook) => {
//     setBooks((prevBooks) => [...prevBooks, newBook]);
//     setShowForm(false); // Close form after adding a book
//   };

//   const handleCloseForm = () => {
//     setShowForm(false); // Close form without adding a book
//   };

//   return (
//     <Container>
//       <Header />
//       {/* Show Add Book Form or Library based on state */}
//       {books.length > 0 ? (
//         // If books are present, show the library page
//         <LibraryPage books={books} onReturnHome={() => {}} />
//       ) : (
//         <>
//           {/* Show Add Book button if no books are present */}
//           <ButtonBase onClick={() => setShowForm(true)}>
//             Add a New Book
//           </ButtonBase>
//           {showForm && (
//             <AddBookForm onAddBook={handleAddBook} onClose={handleCloseForm} />
//           )}
//         </>
//       )}
//     </Container>
//   );
// }

// export default HomePage;

// import { useState } from "react";
// import Container from "../../assets/components/Container/Container";
// import ButtonBase from "../../assets/components/ButtonBase/ButtonBase";
// import Header from "../../assets/components/Header/Header";
// import AddBookForm from "../../assets/components/AddBook/AddBookForm";
// import LibraryPage from "../LibraryPage/LibraryPage";

// function HomePage() {
//   const [showForm, setShowForm] = useState(false); // State for form visibility
//   const [books, setBooks] = useState([]); // State to track books

//   const handleAddBook = (newBook) => {
//     setBooks((prevBooks) => [...prevBooks, newBook]); // Add new book to the list
//     setShowForm(false); // Hide form after adding a book
//   };

//   const handleCloseForm = () => {
//     setShowForm(false); // Close form without adding a book
//   };

//   return (
//     <Container>
//       <Header />
//       {/* Show the library or the Add Book Form depending on the books */}
//       {books.length > 0 ? (
//         // If there are books, show the library page
//         <LibraryPage books={books} onReturnHome={() => {}} />
//       ) : (
//         <>
//           {/* Show Add Book button and form if no books are present */}
//           <ButtonBase onClick={() => setShowForm(true)}>
//             Add a New Book
//           </ButtonBase>
//           {showForm && (
//             <AddBookForm onAddBook={handleAddBook} onClose={handleCloseForm} />
//           )}
//         </>
//       )}
//     </Container>
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
  const { books, addBook } = useBooks(); // Access books and addBook function from the context

  const handleCloseForm = () => {
    setShowForm(false); // Close form without adding a book
  };

  return (
    <>
      {/* Show Add Book Form or Library based on books state */}
      {books.length > 0 ? (
        // If books are present, show the library page
        <LibraryPage />
      ) : (
        <>
          {/* Show Add Book button if no books are present */}
          <ButtonBase onClick={() => setShowForm(true)}>
            Add a New Book
          </ButtonBase>
          {showForm && (
            <AddBookForm onAddBook={addBook} onClose={handleCloseForm} />
          )}
        </>
      )}
    </>
  );
}

export default HomePage;
