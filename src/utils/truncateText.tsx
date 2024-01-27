export const truncateText = (text: string, maxLength: number) => {
  const withoutTags = text.replace(/<[^>]*>/g, ""); // HTMLタグを除去
  if (withoutTags.length > maxLength) {
    return withoutTags.substring(0, maxLength) + "...";
  }
  return withoutTags;
};
