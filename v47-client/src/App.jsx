import {browserRouter as Router, Routes, Route} from "react-dom"
import Landing from "./pages/Landing"
import ProductPage from "./pages/ProductPage"
export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/ProductPage" element={<ProductPage />} />
          <h1>
            hi sky
          </h1>
          <h2>
            hi cakin
          </h2>
        </Routes>
      </Router>
    </div>
  )
}