console.log("Before");

const cb2 = () => {
  console.log("Set timeout 1");
  while (1) {}
};

const cb1 = () => console.log("hello");

setTimeout(cb2, 2000);

setTimeout(cb1, 1000);

console.log("After");

// before
// after
// set timeout 1
// hang (infinite loop)
