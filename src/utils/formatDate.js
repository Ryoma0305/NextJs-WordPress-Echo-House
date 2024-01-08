export const formatJapaneseDate = (date) => {
  return new Date(date).toLocaleDateString("ja-JP", { year: "numeric", month: "numeric", day: "numeric" });
};
