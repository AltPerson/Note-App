export const findWord = (value = "", data, setSelected) => {
  data?.forEach((item) => {
    if (item.text.includes(value)) {
      setSelected({ is: true, id: item.id });
    }
  });
};
