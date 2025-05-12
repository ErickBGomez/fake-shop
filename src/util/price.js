const calculatePrice = (price, discount = 0) => {
  return (price * (1 - discount / 100)).toFixed(2);
};

export default calculatePrice;
