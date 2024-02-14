import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import ProductPage from "./pages/ProductPage";
import { useCallback, useState } from "react";
import PricingPage from "./pages/PricingPage";
import ProductDataContext from "./context/ProductDataContext";
import FilteredDataContext from "./context/FilteredDataContext";
import DarkModeContext from "./context/DarkModeContext";
import IsLoadingContext from "./context/IsLoadingContext";

//

/*

Anthony
- change firebase over and add stripe into the data base
- project task click event
- make show its possible to edit the project task click event
- fix width and height of login and sign up 
- make dark mode work on everything
- make product page responsive ('tabs')



bug:
- add new category, add new task; has left panel bug color.



UI needs to get fixed:

- daily tasker text change to green (nav).
- change font back to normal (nav).
- change login/sign up color to difference green (nav)
- delete task dashboard btn (nav)
- darkmode/light mode, change lightmode = moon, darkmode = sun (nav/productpage nav)
- 




thing to add:
- users can only go to product page if they are signed in (redirect to modal)


send to ava:

- full name
- photo
- linkedin
- github link
*/




//

//

// PRODUCT PAGE

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
