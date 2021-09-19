export const getPlainText = (formattedText) => {
  const regEx = /[^a-zA-Z0-9\s\n]/g;
  const textWithSpaces = formattedText.replace(regEx, "");
  const plainText = [];

  for (let i = 0; i < textWithSpaces.length; i++) {
    if (i === 0 && textWithSpaces[i] === " ") {
      continue;
    } else if (textWithSpaces[i - 1] === "\n" && textWithSpaces[i] === " ") {
      continue;
    } else if (textWithSpaces[i] === " " && textWithSpaces[i - 1] === " ") {
      continue;
    } else {
      plainText.push(textWithSpaces[i]);
    }
  }
  return plainText.join("");
};
