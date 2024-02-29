export const capitalizeEachWord = (str: string) => {
  const strArr = str?.toLowerCase()?.split(" ");
  return strArr
    ?.map((word: string) => word[0]?.toUpperCase() + word?.substr(1))
    ?.join(" ");
};
