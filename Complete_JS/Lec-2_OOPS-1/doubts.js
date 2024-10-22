function abc() {
  // a got memory
  let a = 20;
  console.log(a); //Error will be => ReferenceError: cannot access a before initialization
  //let a = 10;
}
abc();
