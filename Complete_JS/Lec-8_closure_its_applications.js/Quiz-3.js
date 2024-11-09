function createCounter(init, delta) {
  //init = 10, delta = 5
  function count() {
    init = init + delta; // init = 15 + 5 = 20
    return init; // 15
  }
  return count;
}
let c1 = createCounter(10, 5); // 15
let c2 = createCounter(5, 2);

console.log(c1()); //15
console.log(c2()); // 7
console.log(c1()); // 20
console.log(c2()); // 9
