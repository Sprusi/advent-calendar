const STORAGE_KEY = `advent-site-open-keys`;

export const getOpenKeys = (): number[] => {
  const arr = localStorage.getItem(STORAGE_KEY);
  return arr ? JSON.parse(arr) : [];
};

export const setOpenKeys = (arr: number[]): boolean => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(arr));
    return true;
  } catch (e) {
    console.log("err", e);
    return false;
  }
};
