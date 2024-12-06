export const classNames = (...classes) =>
  [...classes].filter((val) => !!val).join(" ");

export const isFunction = (fn) => typeof fn === "function";

export const getLocalStorage = (key) => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
};

export const setLocalStorage = (key, value) => {
  return localStorage.setItem(key, JSON.stringify(value));
};
