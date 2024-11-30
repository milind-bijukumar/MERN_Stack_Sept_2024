const obj = {
  name: "Ashwin",

  age: 36,

  userDetails: function () {
    console.log(`user name ${this.name} and age ${this.age}`);
  },

  print: function () {
    console.log(this);
  },

  obj2: {
    // there is no name property defined
    username: obj.name,
  },
};

console.log(obj.obj2.username);

const obj2 = {
  username: obj.name,
};

// what is the value of username in obj2?

console.log(obj2.username);
