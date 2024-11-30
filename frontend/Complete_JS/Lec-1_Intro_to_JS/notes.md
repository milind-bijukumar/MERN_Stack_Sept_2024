# do you agree JS is most powerful programming language?

- yes, i do agree. JS is the most powerful programming language because now-a-days it is going to use in building desktop apps(electronJS), web apps(JS, ReactJs and Redux), mobile(React Native) apps, QA autimation test cases can be written using JS via cypress or webdriversio, also can build the gaming apps.

# What is JS?

- JS is PL that is used to interact with your websites or web apps.

# who invented the JS?

- Brenden Eich, in 1995. Was the co-founder of Mozilla corporation.

# ES(EcmaScript) vs JS(JavaScript)

- ES is a scriprting programming specification standardised by ECMA International in ECMA-262.
- ES doc - https://262.ecma-international.org/15.0/index.html?_gl=1*1sp81kn*_ga*MTc0ODMyMzU2Mi4xNzIxNjE0MDY0*_ga_TDCK4DWEPP*MTcyMTYxNDA2My4xLjAuMTcyMTYxNDA2My4wLjAuMA..#sec-intro

- JS is the implementation of ECMAScript standard.

- old to latest vesrion:

  old one - ES5 (2014)

  latest vesrion - ES6(2015) and ES15(2024)

  Ref doc - https://en.wikipedia.org/wiki/ECMAScript_version_history

# JS vs Java

- Java is purely Object oriented PL whereas JS is Object-based PL. Because in JS you write the code without using classes and objects. But you can still supoort oops via JS.

- Java is having statically typed or strongly typed PL whereas JS is dynamic typed or losely typed PL.

# How to add JS in web apps or websites?

- There are 2 ways to add JS in web apps:

1. Internal: can directly write the JS code in <script> tag.

2. External: you can create a separate file with extention .js and then provide the path of that file in your src attibute of script tag

# Tools required for writing and executing your JS code:

1. VS code IDE and browser Dev tool
2. Browser
3. Debugging using bwoser dev tools

# What is variable?

- just a name to hold any kind of values.

- In ES5: var a = 10; // number

          var a = 'Ashwani' // string

  In ES6: let a = 10;

          const PAN = 'ABCD1234D';

# What is data type?

- specfies a type of data that a variable holds/stores.

- 2 types of datatypes:

  1.  primitive:

      - pre-defined data types that means that can't be drived from any data types.
      - 7 data types in JS:

      1. string
      2. number
      3. boolean
      4. null
      5. undefined
      6. bigint (later on)
      7. symbol (later on)

  2.  non primitive:

  - These are those data types that can be derived from primitive ones.

  - types of non-primitive data types:
    1.  Array
    2.  Object
    3.  Function

# What is function?

- A reusable piece of code that is used to perform a specific task.

- function function_name(arg1, arg2, agr3,...,argN) {
  // write your logic

      return

  }

# typeof operator:

- used to determine the type of data types of an oprand or expression.
- let a = 10;
- typeof a; // number

- scenario: if(typeof str === 'string' && str !== null) {// write your logic or take decision}

# null vs undefined:

null:

- null means there is no value.
- null can be assigned to a variable which indicated that variable not pointing to anything.
- null is converted to zero when you perform any primitive operations.

undefined:

- undefined means the absence of variable itself;
- When you just decalared a variable but don't assign any value then that varaible contains undefined by default.
- undefined is converted to NaN when you perform any primitive operation.

# Condtional stmts and loops:

1.  if
2.  if..else
3.  else...if ladder
4.  switch
5.  while
6.  do..while
7.  for
8.  for...in
9.  for...of

Ref doc: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#while_statement

# Execution JS code:

- First, all JS code loaded in the browser.
- In the browser, there is JS Engine that will execute the JS code - excetion stack (callstack) - it is always up and running
- After that JS engine inserts the code into the call satck/ execution stack.
