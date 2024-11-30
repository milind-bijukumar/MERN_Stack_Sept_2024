function outer() {
  let arrFn = [];
  for (var i = 0; i < 3; i++) {
    // 4
    //3 < 3;
    arrFn.push(function fn() {
      i++;
      console.log(i); //  4
    });
  }
  return arrFn;
}
let arrFn = outer();
arrFn[0](); // 4
arrFn[1](); // 4 + 1 = 5
arrFn[2](); // 5 + 1 = 6
