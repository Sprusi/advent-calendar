export const isDateAvailable = (dateStr: string) => {
  const today = new Date();
  const todayKey =
    today.getFullYear() * 10000 +
    (today.getMonth() + 1) * 100 +
    today.getDate();
  const [year, month, day] = dateStr.split("-").map(Number);
  const cardKey = year * 10000 + month * 100 + day;

  return todayKey >= cardKey;
};
