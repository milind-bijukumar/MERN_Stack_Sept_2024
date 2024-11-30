/**
   
     What is polyfills?

       - polyfill are the code snippets or JS libraries that provide mordern funtionalities to older browsers or environments that do not supports those features natively.

    when to use it?

      - If you build JS libraries
      - cross-browser compatability


     polyfills of call, apply and bind

      
     Syntax: fn.call(thisArg, arg1, arg2, ...argN)

 */

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

const doctorStrange = {
  name: "Doctor strange",
  team: "Doctor",
};

Function.prototype.myCall = function (objOnWhichReqFnToBeInvoked, ...args) {
  const requiredFn = this;

  objOnWhichReqFnToBeInvoked.requiredFn = requiredFn;

  const result = objOnWhichReqFnToBeInvoked.requiredFn(...args);

  delete requiredFn;

  return result;
};

cap.petersTeam.myCall(ironMan, "Loki", "Thor");

cap.petersTeam.myCall(doctorStrange, "war machine", "Natsha");

cap.petersTeam.call(ironMan, "Loki", "Thor");

cap.petersTeam.call(doctorStrange, "war machine", "Natsha");

// Assignment: write the polyfill of apply
