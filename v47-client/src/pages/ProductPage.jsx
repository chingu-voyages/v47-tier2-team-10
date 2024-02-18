import React, { useContext, useEffect, useState } from "react";
import LeftNav from "../components/productpage/LeftNav/LeftNav";
import data from "../data.json";
import { fetchData } from "../lib/apiServices";
import Header from "../components/productpage/header/Header";
import Main from "../components/productpage/main/Main";
import { productDataContext } from "../context/ProductDataContext";
import { isLoadingContext } from "../context/IsLoadingContext";

export default function ProductPage() {
  const [isLeftNavOpen, setIsLeftNavOpen] = useState(true);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const { setProductData } = useContext(productDataContext);
  const { setIsLoading } = useContext(isLoadingContext);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const result = await fetchData(data);
        setProductData(result);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.error("Error Fetching data", error);
      }
    };
    fetchProductData();
  }, []);

  return (
    <div className="bg-gray-50 dark:bg-slate-900 duration-300  overflow-clip h-screen">
      {isLeftNavOpen && (
        <div
          className="absolute bg-black opacity-50 inset-0 lg:position:static lg:bg-white lg:opacity-0 lg:inset-auto z-10 lg:z-auto"
          onClick={() => setIsLeftNavOpen(false)}
        ></div>
      )}
      <Header
        isLeftNavOpen={isLeftNavOpen}
        setIsLeftNavOpen={setIsLeftNavOpen}
      />
      <LeftNav
        isAddModalOpen={isAddModalOpen}
        setIsAddModalOpen={setIsAddModalOpen}
        isLeftNavOpen={isLeftNavOpen}
        setIsLeftNavOpen={setIsLeftNavOpen}
      />

      <div
        className=" duration-300  py-10 px-5 w-screen lg:ps-72   overflow-scroll h-screen [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500"
      >
        {/*
        - move this to the nav
              
              <UserSignedIn
              showLoginModal={showLoginModal}
              setShowLoginModal={setShowLoginModal}
            />
         */}
        <Main
          isAddModalOpen={isAddModalOpen}
          setIsAddModalOpen={setIsAddModalOpen}
        />
      </div>
    </div>
  );
}
