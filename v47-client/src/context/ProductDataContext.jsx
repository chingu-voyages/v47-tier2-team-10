import React, { createContext, useState } from "react";

export const productDataContext = createContext([]);

export default function ProductDataContext({ children }) {
  const [productData, setProductData] = useState([]);
  return (
    <productDataContext.Provider value={{ productData, setProductData }}>
      {children}
    </productDataContext.Provider>
  );
}
