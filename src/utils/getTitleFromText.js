import { getPlainText } from "./getPlainText";

export const getTitleFromText = (rawText, isTitle) => {
  const text = getPlainText(rawText);
  const title = text.split(/\r?\n/).filter((item) => item !== "");
  console.log("TitleLength", title);
  if (!isTitle && title.length === 0) {
    return undefined;
  }
  return isTitle ? title[0] : text.substr(title[0].length);
};
