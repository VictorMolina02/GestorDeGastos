import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomeView from "./views/home";
import { AuthProvider } from "./context/authContext";
import Details from "./views/details";
import Login from "./components/login";
import { ProtectedRoute } from "./components/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={<Login />} />

          <Route
            exact
            path="/"
            element={
              <ProtectedRoute>
                <HomeView />
              </ProtectedRoute>
            }
          />
          <Route
            exact
            path="/detalles"
            element={
              <ProtectedRoute>
                <Details />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
