export const capitalizeEachWord = (sentence) => {
  const sentenceArr = sentence?.toLowerCase()?.split(" ");
  return sentenceArr
    ?.map((word) => word[0]?.toUpperCase() + word?.substr(1))
    ?.join(" ");
};
