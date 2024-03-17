export const generateDateString = (time: string) => {
  const dateDiff = Date.now() - new Date(time).getTime();

  const secondsPassed = Math.floor(dateDiff / 1000);
  const minutesPassed = Math.floor(secondsPassed / 60);
  const hoursPassed = Math.floor(minutesPassed / 60);
  const daysPassed = Math.floor(hoursPassed / 24);
  const monthsPassed = Math.floor(daysPassed / 30.44);
  const yearsPassed = Math.floor(daysPassed / 365.25);

  if (secondsPassed < 60) {
    return `${secondsPassed} second${secondsPassed !== 1 ? "s" : ""} ago`;
  } else if (minutesPassed < 60) {
    return `${minutesPassed} minute${minutesPassed !== 1 ? "s" : ""} ago`;
  } else if (hoursPassed < 24) {
    return `${hoursPassed} hour${hoursPassed !== 1 ? "s" : ""} ago`;
  } else if (daysPassed < 30) {
    return `${daysPassed} day${daysPassed !== 1 ? "s" : ""} ago`;
  } else if (monthsPassed < 12) {
    return `${monthsPassed} month${monthsPassed !== 1 ? "s" : ""} ago`;
  } else {
    return `${yearsPassed} year${yearsPassed !== 1 ? "s" : ""} ago`;
  }
};
