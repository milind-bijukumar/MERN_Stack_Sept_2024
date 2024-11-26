let count = 0;

const increment = () => {
  return count++;
};

const getCount = () => {
  return count;
};

const decrement = () => {
  return count--;
};

export { increment, getCount };
