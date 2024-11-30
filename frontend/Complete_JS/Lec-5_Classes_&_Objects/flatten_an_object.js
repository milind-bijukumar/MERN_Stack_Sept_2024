// Flatten an object

const nestedObj = {
  person: {
    name: {},
    age: 25,
    address: {
      street: "A-Block",
      city: "Delhi",
      country: "India",
    },
    hobbies: ["Reading", "Teaching", "Coding"],
    isActive: true,
  },
};

// after flatten the nested object

// output

/*
{
    "person.name.firstName": "Ashwani",
    "person.name.lastName": 'Rajput'
    "person.age": 25,
    "person.address.street": "A-Block",
    "person.address.city": "Delhi",
    "person.address.country": "India";
    "person.hobbies.0": "Reading"
    "person.hobbies.1": "Teaching"
    "person.hobbies.2": "Coding"
    "person.isActive": true
}

*/

const fllatenObject = (obj, delimeter = ".", parentKey = "") => {
  const flattend = {};

  // processing the nested object aand flattening it

  for (const key in obj) {
    console.log(Object.prototype.hasOwnProperty.call(obj, key));

    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const newKey = parentKey ? `${parentKey}${delimeter}${key}` : key;

      if (typeof obj[key] === "object" && obj[key] !== null) {
        Object.assign(flattend, fllatenObject(obj[key], delimeter, newKey));
      } else {
        flattend[newKey] = obj[key];
      }
    }
  }

  return flattend;
};

console.log(fllatenObject(nestedObj));

const flatObj = fllatenObject(nestedObj);

for (let key in flatObj) {
  console.log(flatObj[key]);
}
