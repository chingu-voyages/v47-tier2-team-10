import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import ProductPage from "./pages/ProductPage";
import PricingPage from "./pages/PricingPage";
import ProductDataContext from "./context/ProductDataContext";
import FilteredDataContext from "./context/FilteredDataContext";
import DarkModeContext from "./context/DarkModeContext";
import IsLoadingContext from "./context/IsLoadingContext";
import ChatbotComponent from "./pages/ChatbotComponent";


/*
green color: text-[#2d8630]

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
- every sub page within the landing page should have a height of screen and be centered
- implement a transform: y for container onto each test (test page)


jess bugs/ui completed:
- our features color changed to green (features) -PR#77
- sub heading changed to text-[16px] (features) 
- change color when active (left panel category's) -PR#77
- left panel burger menu has error when opened, (needs background as fixed) -PR#77
- modals overfow are not set to hidden when opened (all modals) -PR#78
- change color to green for full names (test page)


bug:
- product page nav elements are not positioned correctly?
- make form in add task/edit task work with enter key


thing to add:
- users can only go to product page if they are signed in (redirect to modal)
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
                  {/* <Route path="/ChatbotComponent" element={<ChatbotComponent/>}/> */}
                </Routes>
              </Router>
            </div>
          </IsLoadingContext>
        </DarkModeContext>
      </FilteredDataContext>
    </ProductDataContext>
  );
}
