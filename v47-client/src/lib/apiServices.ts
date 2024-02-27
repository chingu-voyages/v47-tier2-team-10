import { ProductData } from "./typings";

export const fetchData = async (data: ProductData[]) => {
  const fetchDataPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });

  return fetchDataPromise;
};
