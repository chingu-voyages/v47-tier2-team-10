import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import ProductPage from "./pages/ProductPage";
import { useCallback, useState } from "react";
import PricingPage from "./pages/PricingPage";
import ProductDataContext from "./context/ProductDataContext";
import FilteredDataContext from "./context/FilteredDataContext";
import DarkModeContext from "./context/DarkModeContext";
import IsLoadingContext from "./context/IsLoadingContext";

export default function App() {
  return (
    <ProductDataContext>
      <FilteredDataContext>
        <DarkModeContext>
          <IsLoadingContext>
            <div>
              <Router>
                <Routes>
                  <Route path="/" element={<Landing />} />
                  <Route path="/ProductPage" element={<ProductPage />} />
                  <Route path="/PricingPage" element={<PricingPage />} />
                </Routes>
              </Router>
            </div>
          </IsLoadingContext>
        </DarkModeContext>
      </FilteredDataContext>
    </ProductDataContext>
  );
}

{
  /* idk what you're trying to do but why is this here lol?
               i just commented it out feel free to uncomment it out but 
              pls explain why im so confused - anthony
               <Route path="/Login" element={<Login />} />
                <Route path="/Signup" element={<Signup />} />
                 <Route path="/Footer" element={<Footer />} />
           */
}
