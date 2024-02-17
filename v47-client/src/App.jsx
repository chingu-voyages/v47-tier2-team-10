import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import ProductPage from "./pages/ProductPage";
import PricingPage from "./pages/PricingPage";
import ProductDataContext from "./context/ProductDataContext";
import FilteredDataContext from "./context/FilteredDataContext";
import DarkModeContext from "./context/DarkModeContext";
import IsLoadingContext from "./context/IsLoadingContext";


/*

Anthony
- change firebase over and add stripe into the data base


anthony bug collecting/ui/bugs/tasks changes completed:
- daily tasker text change to green (nav).
- change font back to normal (nav).
- change login/sign up color to difference green (nav)
- delete task dashboard btn (nav)
- on hover scale 90, on click scale 110 for github link and linkedin, alos needs cursor pointer (teaminfo)
- darkmode/light mode, change lightmode = moon, darkmode = sun (nav/productpage nav)
- implement a transform: y for container onto each test (teaminfo)
- full name
- photo
- linkedin
- github link
- project task click event
- make show its possible to edit the project task click event
- fixed width on login and signup
- add a way to add days, choose column aswell in the add new task modal
- make dark mode work on everything
- make product page responsive ('tabs')
- nav needs a z index higher than project task
- z-index of left panel is higher than modals, needs to be lowered when modal is open
- product page main height is cut off (needs min of height always)
- add new category, add new task; has left panel bug color.


jess bugs/ui completed:
- our features color changed to green (features) -PR#77
- sub heading changed to text-[16px] (features) 
- change color when active (left panel category's) -PR#77
- left panel burger menu has error when opened, (needs background as fixed) -PR#77
- modals overfow are not set to hidden when opened (all modals) -PR#78
- change color to green for full names (test page)


bug:
- product page overflow error whole page? - changed height of pic when page first loads so there is no overflow, is this what this bug means? jess
- product page nav elements are not positioned correctly?
- make form in add task/edit task work with enter key


UI needs to get fixed:
- change all headings/subheadings to green 
green color: text-[#2d8630]
- every sub page within the landing page should have a height of screen and be centered
- implement a transform: y for container onto each test (test page)
- needs padding y and max width consistent with other pages (teaminfo)
- each container needs a margin bottom consistent with the gap-x (teaminfo)
- footer just leave it to skylar
- padding-x added to nav (productpage)
- needs padding x (product page)



thing to add:
- users can only go to product page if they are signed in (redirect to modal)


send to ava:

- full name
- photo
- linkedin
- github link
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
