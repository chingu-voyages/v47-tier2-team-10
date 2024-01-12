import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
// import { BrowserRouter } from "react-router-dom"
// import { Router } from "react-router-dom"
// import { Routes } from "react-router-dom"
// import { Route } from "react-router-dom"

import Landing from "./pages/Landing"
import ProductPage from "./pages/ProductPage"
import Footer from "./pages/Footer"

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/ProductPage" element={<ProductPage />} />
          <Route path="/Footer" element={<Footer/>}/>
        </Routes>
      </Router>
      <Footer/>

    </div>
  )
}