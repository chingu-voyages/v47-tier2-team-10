import React, { useEffect, useState } from "react";
import Main from "../components/productpage/Main";
import LeftNav from "../components/productpage/LeftNav/LeftNav"
import Header from "../components/productpage/Header";
import Footer from "./Footer";
import data from "../data.json";

import { fetchData } from "../constants/api";


export default function ProductPage() {

  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorHandling, setErrorHandling] = useState(false);
  const [isLeftNavOpen, setIsLeftNavOpen] = useState(true)

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
  }, [productData]);

  return (
    <section className="flex gap-x-6 h-screen mx-auto p-6 ">
      <LeftNav 
        isLeftNavOpen={isLeftNavOpen} 
        setIsLeftNavOpen={setIsLeftNavOpen} 
        productData={productData}
      />
      <div className="flex space-y-6 flex-1 flex-col">
        <Header 
          isLeftNavOpen={isLeftNavOpen} 
          setIsLeftNavOpen={setIsLeftNavOpen}
        />
        <Main />
      </div>  
    </section>
  );
}
