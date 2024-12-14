/**

    What is debouncing?

       - Debouncing is a useful technique When you are implementing a feature like:

          - autobox suggestion / typeadhead sytem, with some delaying a task -> execting the function with some delay.


       - usecases:

          1. While user typing into the input field.
          2. window resizing (resize)
          3. scroll events (scroll)
          4. avoid the multiple user clicks
 */

export const debounce = (cb, delay) => {
  let timerid = null;

  return function (...args) {
    if (timerid) {
      clearTimeout(timerid);
      timerid = null;
    }

    timerid = setTimeout(() => {
      // setTimeout returns the timerid
      cb.apply(this, args);
    }, delay);
  };
};
