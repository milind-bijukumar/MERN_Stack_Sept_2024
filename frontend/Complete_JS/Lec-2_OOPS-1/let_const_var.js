/***

    let vs const vs var:


    let:

        - block scope only
        - can be re-assigned
        - no hoisting
        - re-declartion is not allowed.
        - let a = 10;


    const:

        - block scope only
        - can't be re-assigned.
        - no hoistiog possible
        - re-declaration is not allowed
        - const PAN = 'ABCD1234D'

    var:

        - function scope only.
        - can be re-assigned.
        - hoisting is possible.
        - re-decalation is possible
        - var a = 10;

 */

function variableConcept() {
  var a = 30;

  let b = 20;

  const c = 30;

  if (b) {
    let b = 40;
    a = 20;
    b = 30;
    //c = 40;
    console.log(b);
  }
}

variableConcept();

/**
    Don't use var now in you JS programming, always go with let and const only.
 */
