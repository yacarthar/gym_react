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

export const genExpireDate = (year, month) => {
  // day=0 mean last day of previous month
  const d = new Date(Date.UTC(year, parseInt(month) + 1, 0))
  console.log(d)
  return d;
};
