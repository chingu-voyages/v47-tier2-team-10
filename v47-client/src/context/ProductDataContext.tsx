import React, { createContext, useState } from "react";
import { ProductData } from "../types/typings";
import useFetchData from "../hooks/useFetchData";

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
  const { fetchedData } = useFetchData();
  const [productData, setProductData] = useState<ProductData[]>(fetchedData);

  const contextValue: ProductDataContextProps = {
    productData,
    setProductData,
  };
  return (
    <productDataContext.Provider value={contextValue}>
      {children}
    </productDataContext.Provider>
  );
}
