export const getCartData = () => {
  let localCartData = localStorage.getItem("latkanCart");
  const parseData = JSON.parse(localCartData);
  if (!Array.isArray(parseData)) return [];
  return parseData;
};

export const setCartData = (cart) => {
  return localStorage.setItem("latkanCart", JSON.stringify(cart));
};
