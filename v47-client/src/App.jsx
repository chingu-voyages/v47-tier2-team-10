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
- product page overflow error whole page?
- product page nav elements are not positioned correctly?
- product page main height is cut off (needs min of height always)
- modals overfow are not set to hiddne when opened (all modals)
- z-index of left panel is higher than modals, needs to be lowered when modal is open
- left panel burger menu has error when opened, (needs background as fixed)


UI needs to get fixed:

green color: text-[#2d8630]

- change all headings/subheadings to green 
- daily tasker text change to green (nav).
- change font back to normal (nav).
- change login/sign up color to difference green (nav)
- delete task dashboard btn (nav)
- darkmode/light mode, change lightmode = moon, darkmode = sun (nav/productpage nav)
- our features color changed to green (features)
- sub heading changed to text-[16px] (features)
- feature links make sure they dont go anywhere, add not allowed cursor (features)
- every sub page within the landing page should have a height of screen and be centered
- implement a transform: y for container onto each test (test page)
- change color to green for full names (test page)
- needs padding y and max width consistent with other pages (teaminfo)
- each container needs a margin bottom consistent with the gap-x (teaminfo)
- on hover scale 90, on click scale 110 for github link and linkedin, alos needs cursor pointer (teaminfo)
- implement a transform: y for container onto each test (teaminfo)
- footer just leave it to skylar
- padding-x added to nav (productpage)
- needs padding x (product page)
- change color when active (left panel category's)


thing to add:
- users can only go to product page if they are signed in (redirect to modal)


send to ava:

- full name
- photo
- linkedin
- github link


anthony bug collecting/ui changes completed:



*/

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
