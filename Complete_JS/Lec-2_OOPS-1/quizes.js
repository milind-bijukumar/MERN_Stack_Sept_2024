//Quiz:1

// let cap = {
//   // property
//   firstName: "Steve",
//   // method
//   sayHi: function () {
//     console.log("hi from", this.firstName);
//   },
// };

// cap.sayHi();
// var firstName = "Loki";
// let sayHiAdd = cap.sayHi;
// sayHiAdd();

// hi from Steve
//  hi from Loki

// Quiz-2:

// let cap = {
//   firstName: "Steve",
//   sayHi: function () {
//     console.log("53", this.firstName);
//     const iAmInner = function () {
//       console.log("55", this.firstName); // this rfer to the window object
//     };
//     iAmInner();
//   },
// };
// cap.sayHi();

// 53 Steve
// 55 undefined

// Quiz-3:

// let cap = {
//   firstName: "Steve",
//   sayHi: function () {
//     console.log("53", this.firstName); // 53 Steve
//     const iAmInner = () => {
//       console.log("55", this.firstName);// 55 Steve
//     };
//     iAmInner();
//   },
// };
// cap.sayHi();

// quiz-4

var firstName = "Loki";

let cap = {
  firstName: "Steve",
  sayHi: () => {
    console.log("53", this.firstName); // 53 Loki
    const iAmInner = () => {
      console.log("55", this.firstName); // 55 Loki
    };
    iAmInner();
  },
};
cap.sayHi();
