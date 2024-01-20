import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import ProductPage from "./pages/ProductPage";
import Footer from "./pages/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useCallback, useState } from "react";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = useCallback(() => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }, []);
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="/ProductPage"
            element={
              <ProductPage toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
            }
          />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Footer" element={<Footer />} />
        </Routes>
      </Router>
    </div>
  );
}
