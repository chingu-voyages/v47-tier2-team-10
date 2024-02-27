import React, { createContext, useState } from "react";
import { ProductData } from "../lib/typings";

interface ProductDataContextProps {
  setProductData: React.Dispatch<React.SetStateAction<ProductData[]>>;
  productData: ProductData[];
}
export const productDataContext = createContext<ProductDataContextProps>({
  productData: [],
  setProductData: () => [],
});

export default function ProductDataContext({
  children,
}: {
  children: React.ReactNode;
}) {
  const [productData, setProductData] = useState<ProductData[]>([]);

  const contextValue: ProductDataContextProps = {
    productData,
    setProductData
  }
  return (
    <productDataContext.Provider value={contextValue}>
      {children}
    </productDataContext.Provider>
  );
}
