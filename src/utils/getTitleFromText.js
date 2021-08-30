export const getTitleFromText = (text, isTitle) => {
  const title = text.split(/\r?\n/);
  return isTitle ? title[0] : text.substr(title[0].length);
};
