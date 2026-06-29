const imageEntries = import.meta.glob("../assets/images/*.{jpg,jpeg,png,svg}", { eager: true, as: "url" });

const imageMap = Object.fromEntries(
  Object.entries(imageEntries).map(([key, url]) => [key.split("/").pop(), url])
);

export const getImageUrl = (relativePath) => {
  const fileName = relativePath.replace(/\\/g, "/").split("/").pop();
  return imageMap[fileName] || relativePath;
};
