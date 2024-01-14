
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Landing from "./pages/Landing"
import ProductPage from "./pages/ProductPage"
export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/ProductPage" element={<ProductPage />} />
        </Routes>
      </Router>
    </div>
  );
}
