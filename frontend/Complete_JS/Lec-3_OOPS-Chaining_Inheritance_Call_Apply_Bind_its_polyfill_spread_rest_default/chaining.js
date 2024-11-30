/***

  What is chaining in JS?

   - PS: objname.method1();
         Objname.method2();

         what about this way?

        objname.method1().method2().method3().method();

    - It's a technique to call multiple methods on an object in a single line of code.

    - Benefits:

      - Chaining makes the code cleaner and helps devs to understand the sequence of operations in one go.

 */

const ladder = {
  step: 0,

  up() {
    this.step++;
    return this;
  },

  down() {
    this.step--;
    return this;
  },

  showStep() {
    console.log(this.step);
  },
};

// ladder.up();
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep();

ladder.up().up().up().down().showStep();

// can use in your API calling HTTP request method
// const apiMethods = {
//   data: null,

//   createInstance() {},

//   get() {},
//   post() {},
//   put() {},
//   delete() {},
// };

// apiMethods.createInstance().post();
