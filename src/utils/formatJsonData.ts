export const jsonFormatter = (data) => {
  //   console.log("🚀 ~ jsonFormatter ~ data:", data);
  const format = JSON.parse(data);
  //   const cleanText = format.replace(/<[^>]*>/g, "");
  //   return cleanText;
  return format;
};
