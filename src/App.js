import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { AuthProvider } from "./context/AuthContext";
import "./layout/PageLayout.css";
import AppContainer from "./containers/AppContainer";
import ProfilePage from "./pages/ProfilePage";
import BookmarksPage from "./pages/BookmarksPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route
          path="/home"
          element={<AppContainer component={<HomePage />} />}
        />
        <Route
          path="/profile/:id"
          element={<AppContainer component={<ProfilePage />} />}
        />
        <Route
          path="/bookmarks"
          element={<AppContainer component={<BookmarksPage />} />}
        />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
