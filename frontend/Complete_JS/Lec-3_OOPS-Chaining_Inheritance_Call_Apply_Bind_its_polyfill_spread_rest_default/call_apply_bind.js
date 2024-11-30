/**

   call(), apply() and bind()


   1. call():

       - used to invoke a function with a specified value of this and individual params.

       - Syntax: functionName.call(thisArg, arg1, arg2, ..., argN);

       - usecase:
          - would like to invoking a method by setting the this context.
          Imp Note: We use call when we want to borrow a method only once with a defined number of parameters.



   2. apply():

       - apply() is similar to call(), but it accepts the arguments as an array instead of individual values.
       - Syntax: functionName.apply(thisArg, [argsArray]);

       usecase:

        - where you don't know how many parameters you need to send
         Imp Note: We use apply when we want to borrow a method only once with n number of parameters, use only when parameters are unknown.


   3. bind():

      - Creates a new method with a specified contet of this and optional parameters
      - unlike the call() and apply(), it returns a new method that needs to be invoked later on.

      const fn = functionName.bind(thisArg, arg1, arg2,...argN);  

      fn();

      - usecase:

         - When you want to use a single method multiple times, we use bind to make a permanent copy.


 */

// call
// let cap = {
//   name: "Steve",
//   team: "cap",

//   petersTeam(mem1, mem2) {
//     console.log(
//       `Hey, ${this.name} and i am the part of your team ${this.team} and ${mem1} and ${mem2} belongs to the team ${this.team} `
//     );
//   },
// };

// // cap.petersTeam("Thor", "Loki");

// const ironMan = {
//   name: "Tony",
//   team: "Iron Man",
// };

// cap.petersTeam.call(ironMan, "Thor", "Loki");

// apply

// let cap = {
//   name: "Steve",
//   team: "cap",

//   petersTeam(mem1, mem2, ...otherMembers) {
//     console.log(
//       `Hey, ${this.name} and i am the part of your team ${this.team} and ${mem1} and ${mem2} belongs to the team ${this.team}  and rest members ${otherMembers} would be part of ${cap.team}`
//     );
//   },
// };

// // cap.petersTeam("Thor", "Loki");

// const ironMan = {
//   name: "Tony",
//   team: "Iron Man",
// };

// cap.petersTeam.apply(ironMan, [
//   "Thor",
//   "Loki",
//   "natasha",
//   "doctor starnge",
//   "war machine",
// ]);

let cap = {
  name: "Steve",
  team: "cap",

  petersTeam(mem1, mem2) {
    console.log(
      `Hey, ${this.name} and i am the part of your team ${this.team} and ${mem1} and ${mem2} belongs to the team ${this.team}`
    );
  },
};

// cap.petersTeam("Thor", "Loki");

const ironMan = {
  name: "Tony",
  team: "Iron Man",
};

const boundFn = cap.petersTeam.bind(ironMan);
boundFn("Loki", "Thor");

boundFn("captian america", "war machine");
