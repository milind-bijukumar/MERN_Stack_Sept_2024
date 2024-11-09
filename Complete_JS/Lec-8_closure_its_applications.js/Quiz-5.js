function outer() {
  let arrFn = [];
  //   let i = 0;
  for (let i = 0; i < 3; i++) {
    arrFn.push(function fn() {
      // closure is forming on i vaiable last updated value of i was 3
      console.log(i);
    });
  }
  return arrFn;
}
let arrFn = outer();
arrFn[0](); // 3  when let i=0 efining in for loop -> 0
arrFn[1](); // 3                                      1
arrFn[2](); // 3                                      2

//arrFn[3]();
