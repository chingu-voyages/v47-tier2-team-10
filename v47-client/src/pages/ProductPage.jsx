import React, { useEffect, useState } from "react";
import LeftNav from "../components/productpage/LeftNav/LeftNav";
import data from "../data.json";
import { fetchData } from "../constants/api";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import app from "../firebase";
import { IoLogIn, IoLogOut } from "react-icons/io5";
import Header from "../components/productpage/header/Header";
import Main from "../components/productpage/main/Main";
import Login from "./Login";
import Logout from "./Logout";
import Button from "../components/landing/Button";

export default function ProductPage({ toggleDarkMode, darkMode }) {
  const [productData, setProductData] = useState([]);
  const [user, setUser] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorHandling, setErrorHandling] = useState(false);
  const [isLeftNavOpen, setIsLeftNavOpen] = useState(true);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [showLoginModal,setShowLoginModal] = useState(false);

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
        setProductData(result);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setErrorHandling(true);
        console.error("Error Fetching", error);
      }
    };
    fetchProductData();
  }, []);

  useEffect(() => {
    const auth = getAuth(app);
    const unsubscriebe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
   
    return () => unsubscriebe();
  }, []);

  const handleLogin = () => {
    setUser({});
    //close the login modal after successful login
    setShowLoginModal(false);
  };

  const handleLogout = () => {
    const auth = getAuth(app);
    signOut(auth); //fire, legendary - cakin
    setUser(null);
  };

  return (
    <section className="flex gap-x-6 h-screen mx-auto p-6 ">
      <LeftNav
        isAddModalOpen={isAddModalOpen}
        setIsAddModalOpen={setIsAddModalOpen}
        isLoading={isLoading}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        handleFilterData={handleFilterData}
        isLeftNavOpen={isLeftNavOpen}
        setIsLeftNavOpen={setIsLeftNavOpen}
        productData={productData}
      />
      <div className="flex space-y-6 flex-1 flex-col">
      <div className="flex items-center justify-between">
        
          {user ? (
              <div>
                <IoLogOut onClick={handleLogout}>
                {/* <Logout onLogout={handleLogout} />  */}
                </IoLogOut>
              </div>
            ) : (
              <div>
                <IoLogIn onClick={()=>setShowLoginModal(true)}/>
                {showLoginModal && <Login onLogin={handleLogin} onCancel={()=>setShowLoginModal(false)}/>}
              </div>
            )}
            
        </div>
        <Header
          isLoading={isLoading}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          filteredData={filteredData}
          isLeftNavOpen={isLeftNavOpen}
          setIsLeftNavOpen={setIsLeftNavOpen}
        />
        <Main
          setFilteredData={setFilteredData}
          setProductData={setProductData}
          isAddModalOpen={isAddModalOpen}
          setIsAddModalOpen={setIsAddModalOpen}
          filteredData={filteredData}
        />
      </div>
    </section>
  );
}
