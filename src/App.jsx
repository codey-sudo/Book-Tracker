import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { BooksProvider } from "./context/BooksContext"; // Import BooksProvider
import HomePage from "./pages/HomePage/HomePage";
import LibraryPage from "./pages/LibraryPage/LibraryPage";
import Container from "./assets/components/Container/Container";
import Header from "./assets/components/Header/Header";

function App() {
  return (
    <BooksProvider>
      {/* Wrap your app with BooksProvider */}
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Container>
                <Header />
                <HomePage />
              </Container>
            }
          />
          <Route
            path="/library"
            element={
              <Container>
                <Header />
                <LibraryPage />
              </Container>
            }
          />
          <Route
            path="/"
            element={<Navigate to="/home" />} // Redirect to homepage on startup
          />
        </Routes>
      </Router>
    </BooksProvider>
  );
}

export default App;
