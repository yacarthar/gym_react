export const parseDate = (isoDate) => {
  if (!isoDate) {
    return {};
  }
  const d = new Date(isoDate);
  return {
    day: d.getDate(),
    month: d.getMonth(),
    year: d.getFullYear(),
  };
};
