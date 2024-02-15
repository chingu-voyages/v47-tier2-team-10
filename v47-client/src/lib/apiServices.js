export const fetchData = async (data) => {
  const fetchDataPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });

  return fetchDataPromise;
};