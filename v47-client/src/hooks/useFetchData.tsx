import React, { useEffect, useState } from "react";
import { ProductData } from "../types/typings";
import { createPromise } from "../services/apiServices";
import data from "../data/data.json";

interface Props {
  isLoading: boolean;
  error: boolean;
  fetchedData: ProductData[];
}

export default function useFetchData() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [fetchedData, setFetchedData] = useState<ProductData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetch: ProductData[] = (await createPromise(
          data as ProductData[]
        )) as ProductData[];
        setFetchedData(fetch);
        setIsLoading(false);
      } catch (error) {
        console.log(error, "error fetching data");
        setIsLoading(false);
        setError(true);
      }
    };
    fetchData();
  }, []);

  const hookValues: Props = {
    fetchedData,
    error,
    isLoading,
  };
  return hookValues;
}
