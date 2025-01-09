import { useState } from "react";
import { Container } from "./assets/components";
import ButtonBase from "./assets/components/ButtonBase/ButtonBase";
import Header from "./assets/components/Header/Header";
import AddBookForm from "./assets/components/AddBook/AddBookForm";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [books, setBooks] = useState([]); // State to track books
  console.log("Show Form:", showForm); // Logs the state on every render

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleAddBook = (newBook) => {
    console.log("Adding book:", newBook);
    setBooks([...books, newBook]);
  };

  return (
    <Container>
      {showForm ? (
        <>
          <Header />
          <AddBookForm onAddBook={handleAddBook} />
          <ul>
            {books.map((book) => (
              <li key={book.id}>
                {book.Title} by {book.Author} ({book.Category})
              </li>
            ))}
          </ul>
        </>
      ) : (
        <ButtonBase onClick={handleButtonClick}>Add a New Book</ButtonBase>
      )}
    </Container>
  );
}

export default App;
