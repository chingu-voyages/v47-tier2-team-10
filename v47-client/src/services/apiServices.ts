import { ProductData } from "../types/typings";

export const createPromise = async (data: ProductData[]) => {
  const fetchDataPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data as ProductData[]);
    }, 2000);
  });

  return fetchDataPromise;
};
