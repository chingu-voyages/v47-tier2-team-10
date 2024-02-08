import React, { useContext, useEffect, useState } from "react";
import LeftNav from "../components/productpage/LeftNav/LeftNav";
import data from "../data.json";
import { fetchData } from "../lib/apiServices";
import app from "../firebase";
import Header from "../components/productpage/header/Header";
import Main from "../components/productpage/main/Main";
import { productDataContext } from "../context/ProductDataContext";
import { isLoadingContext } from "../context/IsLoadingContext";
import UserSignedIn from "../components/productpage/main/UserSignedIn";

export default function ProductPage() {
  const [isLeftNavOpen, setIsLeftNavOpen] = useState(true);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

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
        console.error("Error Fetching", error);
      }
    };
    fetchProductData();
  }, []);

  return (
    <>
      {isLeftNavOpen && (
        <div
          className="absolute bg-black opacity-50 inset-0 md:position:static md:bg-white md:opacity-0 md:inset-auto z-10 md:z-auto"
          onClick={() => setIsLeftNavOpen(false)}
        ></div>
      )}
      <section className="flex gap-x-6 h-screen mx-auto p-6 ">
        <LeftNav
          isAddModalOpen={isAddModalOpen}
          setIsAddModalOpen={setIsAddModalOpen}
          isLeftNavOpen={isLeftNavOpen}
          setIsLeftNavOpen={setIsLeftNavOpen}
        />
        <div className="flex space-y-6 flex-1 flex-col">
          <div className="flex items-center justify-between">
            <UserSignedIn
              showLoginModal={showLoginModal}
              setShowLoginModal={setShowLoginModal}
            />
          </div>
          <Header
            isLeftNavOpen={isLeftNavOpen}
            setIsLeftNavOpen={setIsLeftNavOpen}
          />
          <Main
            isAddModalOpen={isAddModalOpen}
            setIsAddModalOpen={setIsAddModalOpen}
          />
        </div>
      </section>
    </>
  );
}
