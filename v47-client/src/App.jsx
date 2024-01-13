import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Landing from "./pages/Landing"
import ProductPage from "./pages/ProductPage"
import Footer from "./pages/Footer"
import Login from "./pages/Login"
import Signup from "./pages/Signup"

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/ProductPage" element={<ProductPage />} />
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Signup" element={<Signup/>}/>
          <Route path="/Footer" element={<Footer/>}/>
        </Routes>
      </Router>

    </div>
  )
}