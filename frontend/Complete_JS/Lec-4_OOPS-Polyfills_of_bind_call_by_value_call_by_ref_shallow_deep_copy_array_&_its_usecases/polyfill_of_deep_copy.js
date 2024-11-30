/** 
 
        - to avoid the problem, can write the polyfill of deepCopy.

            Polyfill of Deep copy Algo:

              1. Take a nested object.
              2. check if the obj having primitive type or null
                 if(obj === null || typeof obj !== 'object') {
                   return obj;
                 } 
               3. create an empty array or object based on the type of object
                   let copy = Array.isArray(obj) ? [] : {}

               4. iterate all properties of an object

                    for(let key in nestedObj) {
                        5. check if key has the property or containing an object

                        6. recursively call the deepCopy(NestedObj)
                    }

                7. return the deepCopy

*/

// Implement the polyfill of deepCopy

const deepCopy = (nestedObj) => {
  // implement the algo via JS

  let copy = Array.isArray(nestedObj) ? [] : {};

  // Implement further inside this copy object

  return copy;
};

const student2 = deepCopy(student);

student2.address.city = "Banglore";
student2.age = 40;

console.log(student);
console.log(student2);
