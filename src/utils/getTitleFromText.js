import { getPlainText } from "./getPlainText";

export const getTitleFromText = (rawText, isTitle) => {
  const text = getPlainText(rawText);
  const title = text.split(/\r?\n/);
  return isTitle ? title[0] : text.substr(title[0].length);
};
