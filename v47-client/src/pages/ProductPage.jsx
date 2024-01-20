import React, { useEffect, useState } from "react";
import Main from "../components/productpage/Main";
import LeftNav from "../components/productpage/LeftNav/LeftNav";
import Header from "../components/productpage/Header";
import Login from "./Login";
import Logout from "./Logout"; 
import data from "../data.json";
import { fetchData } from "../components/constants/api";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import app from "../firebase";
export default function ProductPage({ toggleDarkMode, darkMode }) {

  const [productData, setProductData] = useState([]);
  const [user, setUser] = useState(null); // Track user authentication status
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorHandling, setErrorHandling] = useState(false);
  const [isLeftNavOpen, setIsLeftNavOpen] = useState(true);

  const handleFilterData = (taskName) => {
    const filterData = productData.flatMap((data) => {
      return data.activityTypes.filter((item) => {
        return item.activityName === taskName;
      });
    });
    setFilteredData(filterData);
  };

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const result = await fetchData(data);
        setProductData(result)
      } catch (error) {
        console.error("Error Fetching", error);
      }
    };
    fetchProductData();
  }, [productData]);

  // for authentication state changes
  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  // to handle user login
  const handleLogin = () => {
    // Update the user state when login is successful
  };

  // to handle user logout
  const handleLogout = () => {
    const auth = getAuth(app);
    signOut(auth); // Firebase signOut
    // The onAuthState will automatically update when the user is logged out
  };

  return (
    <section className="flex gap-x-6 h-screen mx-auto p-6">
      <LeftNav />
      <div className="flex space-y-6 flex-1 flex-col">
        <div className="flex items-center justify-between">
          {user ? (
              <div>
                <Logout onLogout={handleLogout} /> 
              </div>
            ) : (
              <div>
                <Login onLogin={handleLogin} /> 
              </div>
            )}
        </div>
        <Header />
        <Main />

//   return (
//     <section className="flex  gap-x-6 h-screen mx-auto p-6 ">
//       <LeftNav
//         isLoading={isLoading}
//         darkMode={darkMode}
//         toggleDarkMode={toggleDarkMode}
//         handleFilterData={handleFilterData}
//         isLeftNavOpen={isLeftNavOpen}
//         setIsLeftNavOpen={setIsLeftNavOpen}
//         productData={productData}
//       />
//       <div className="flex space-y-6 flex-1 flex-col">
//         <Header
//           isLoading={isLoading}
//           darkMode={darkMode}
//           toggleDarkMode={toggleDarkMode}
//           filteredData={filteredData}
//           isLeftNavOpen={isLeftNavOpen}
//           setIsLeftNavOpen={setIsLeftNavOpen}
//         />
//         <Main filteredData={filteredData} />

//       </div>
//     </section>
  );
}
