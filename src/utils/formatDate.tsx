export const formatJapaneseDate = (date: string) => {
  return new Date(date).toLocaleDateString("ja-JP", { year: "numeric", month: "numeric", day: "numeric" });
};
