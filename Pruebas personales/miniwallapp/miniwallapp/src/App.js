import "./App.css";
import { BrowserRouter, routes, Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <BrowserRouter>
      <header>
        <h1>Mini-wallapop</h1>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<ProductsPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/login" element={<p>Login</p>}></Route>
        </Routes>
      </main>

      <footer>
        <p>HACK A BOSS 2022@</p>
      </footer>
    </BrowserRouter>
  );
}

export default App;
