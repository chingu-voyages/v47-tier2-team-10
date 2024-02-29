import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import ProductPage from "./pages/ProductPage";
import PricingPage from "./pages/PricingPage";
import ProductDataContext from "./context/ProductDataContext";
import FilteredDataContext from "./context/FilteredDataContext";
import DarkModeContext from "./context/DarkModeContext";
import IsLoadingContext from "./context/IsLoadingContext";
import AuthContext from "./context/AuthContext";

/*

fix location of readme within public folder

refactoring:
- refactor pricing page into react
- need to fix use fetch hhook with isloading (context) to correctly work together

bug:
- product page nav elements are not positioned correctly?
- make form in add task/edit task work with enter key

*/

export default function App() {
  return (
    <ProductDataContext>
      <FilteredDataContext>
        <DarkModeContext>
          <IsLoadingContext>
            <AuthContext>
              <div>
                <Router>
                  <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/ProductPage" element={<ProductPage />} />
                    <Route path="/PricingPage" element={<PricingPage />} />
                  </Routes>
                </Router>
              </div>
            </AuthContext>
          </IsLoadingContext>
        </DarkModeContext>
      </FilteredDataContext>
    </ProductDataContext>
  );
}
