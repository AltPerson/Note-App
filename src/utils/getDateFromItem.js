export const getDateFromItem = (date) => {
  const itemDateDay = new Date(date).getDate();
  const itemDateMonth = new Date(date).getMonth();
  const itemDateYear = new Date(date).getFullYear();
  const itemDateHour = new Date(date).getHours();
  const itemDateMinutes = new Date(date).getMinutes();
  const nowDateDay = new Date(Date.now()).getDate();
  if (itemDateDay === nowDateDay) {
    return `${
      itemDateHour.toString().length === 1 ? '0' + itemDateHour : itemDateHour
    }:${
      itemDateMinutes.toString().length === 1
        ? '0' + itemDateMinutes
        : itemDateMinutes
    }`;
  } else if (itemDateDay < nowDateDay) {
    return `${
      itemDateDay.toString().length === 1 ? '0' + itemDateDay : itemDateDay
    }.${
      itemDateMonth.toString().length === 1
        ? '0' + itemDateMonth
        : itemDateMonth
    }.${itemDateYear}`;
  }
};
