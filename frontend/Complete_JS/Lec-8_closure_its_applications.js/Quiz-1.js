var varName = 10;

function b() {
  console.log(varName);
}

function fn() {
  var varName = 20;
  b(); // 10
  console.log(varName); //20
}

fn(); // 10 20
