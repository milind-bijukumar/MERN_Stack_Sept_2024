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

// Syntax:  const fn = functionName.bind(thisContext, arg1, arg2,..., argN);

// fn(arg1, arg2, ...argN)

// const boundFn = cap.petersTeam.bind(ironMan);
// boundFn("Loki", "Thor");

// boundFn("captian america", "war machine");

//cap.petersTeam.call(ironMan, "Loki", "Thor");

// const fn = cap.petersTeam.bind(ironMan);

// fn("Nathsa", "War machine");

Function.prototype.myBind = function (objOnWhichReqFnToBeInvoked, ...args) {
  const requiredFn = this;

  return function (...innerArgs) {
    delete requiredFn;

    requiredFn.apply(objOnWhichReqFnToBeInvoked, args.concat(innerArgs));
  };
};

const fn = cap.petersTeam.myBind(ironMan);

fn("Nathsa", "War machine");
