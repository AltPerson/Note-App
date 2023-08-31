export const getPlainText = (formattedText) => {
  const regEx = /[^a-z,A-Z,а-яієїґ,А-ЯҐЄІЇ,0-9\s\n]/g;
  const plainText = [];

  const textWithSpaces = formattedText.replace(regEx, '');

  for (let i = 0; i < textWithSpaces.length; i++) {
    if (i === 0 && textWithSpaces[i] === ' ') {
      continue;
    } else if (textWithSpaces[i - 1] === '\n' && textWithSpaces[i] === ' ') {
      continue;
    } else if (textWithSpaces[i] === ' ' && textWithSpaces[i - 1] === ' ') {
      continue;
    } else {
      plainText.push(textWithSpaces[i]);
    }
  }

  return textWithSpaces;
};
