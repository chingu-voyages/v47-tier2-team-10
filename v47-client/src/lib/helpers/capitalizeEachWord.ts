export const capitalizeEachWord = (sentence: string) => {
  const sentenceArr = sentence?.toLowerCase()?.split(" ");
  return sentenceArr
    ?.map((word: string) => word[0]?.toUpperCase() + word?.substr(1))
    ?.join(" ");
};
