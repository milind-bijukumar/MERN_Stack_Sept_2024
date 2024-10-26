Function.prototype.myBind = function (objOnWhichReqFnToBeInvoked, ...args) {
  const requiredFn = this;

  return function (...innerArgs) {
    delete requiredFn;

    requiredFn.apply(objOnWhichReqFnToBeInvoked, args.concat(innerArgs));
  };
};
