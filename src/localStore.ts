export function addToLocalStorage(key: string, value: string) {
  return localStorage.setItem(key, value);
};

export function getFromLocalStorage(key: string) {
  return JSON.parse(localStorage.getItem(key));
};
