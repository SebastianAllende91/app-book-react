export const saveValue = (key, value) => {
  if (typeof value === "object") {
    localStorage.setItem(key, JSON.stringify(value));
  } else {
    localStorage.setItem(key, value);
  }
};

export const getValue = (key, shouldParse) => {
  if (shouldParse) {
    return JSON.parse(localStorage.getItem(key));
  }
  return localStorage.getItem(key);
};

export const removeItem = (key) => localStorage.removeItem(key);

const rand = () => Math.random(0).toString(36).substr(2);
export const createToken = (length) =>
  (rand() + rand() + rand() + rand()).substr(0, length);
