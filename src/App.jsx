import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomeView from "./views/home";

import Details from "./views/details";
// import Login from "./components/login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route exact path="/login" element={<Login />} /> */}

        <Route exact path="/" element={<HomeView />} />
        <Route exact path="/detalles" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
