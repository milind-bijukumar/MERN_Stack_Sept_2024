console.log("Before");
function resolveAfterNSeconds(delay, x) {
  // 2000, 2
  // 1000, 1
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x); // 1
    }, delay); // 1000->1s
  });
}
//console.time();
(function () {
  console.time();
  let a = resolveAfterNSeconds(1000, 1); // 1sec
  a.then(async function (x) {
    // first time x = 1
    let y = await resolveAfterNSeconds(2000, 2); // 2 sec
    let z = await resolveAfterNSeconds(1000, 3); // 1 sec

    let p = resolveAfterNSeconds(2000, 4); // 2sec, 4
    let q = resolveAfterNSeconds(1000, 5); // 1sec , 5

    // total time = 1sec+2sec+1sec+2sec = 6sec
    // console.timeEnd();
    console.log(x + y + z + (await p) + (await q)); // 1+2+3+4+5
    console.timeEnd();
  });
})();
//console.timeEnd();

console.log("After");

// Before
// After
// 15

//
