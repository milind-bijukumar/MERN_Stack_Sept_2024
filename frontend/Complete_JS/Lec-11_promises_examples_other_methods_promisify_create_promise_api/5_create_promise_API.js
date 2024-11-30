/**

   Create the Promise APIs:

     - interviewer may ask such quetions
     - let's if one of the browsers doesn't doesn't support promises, then you have write polyfill to support all the methods of promises like resolve, reject, then, catch, finally, all

     promise - having 3 states:

               1. pending 2. resolved 3. rejected

               Promise.resolve();
               Promise.reject();
               Promise.rsolve().then(scb, fcb);
               Promise.reject().catch(fcb);
               Promise.reolve().finally(mcb);

               new Promise ((resolve, reject)=>{
                  if(data){
                   resolve(data)
                  } else {
                  
                    reject(err)
                  }
               
               })

 */

const PENDING = "pending";
const RESOLVED = "resolved";
const REJECTED = "rejected";

function CustomPromise(excutorFn) {
  let state = PENDING;
  let value = undefined;

  let scbArr = [];
  let fcbArr = [];

  const resolve = (val) => {
    if (state !== PENDING) return;

    state = RESOLVED;

    value = val;

    scbArr.forEach((cb) => {
      cb(value);
    });
  };

  const reject = (err) => {
    if (state !== PENDING) return;

    state = REJECTED;

    value = err;

    fcbArr.forEach((cb) => {
      cb(value);
    });
  };

  this.then = function (cb) {
    if (state === RESOLVED) {
      cb(value);
    } else {
      scbArr.push(cb);
    }
    return this;
  };

  this.catch = function (cb) {
    if (state === REJECTED) {
      cb(value);
    } else {
      fcbArr.push(cb);
    }

    return this;
  };

  this.finally = function () {
    // assignment Please try do based on then and catch impl
  };

  //  call the executor function
  excutorFn(resolve, reject);
}

const promise = new CustomPromise((resolve, reject) => {
  setTimeout(() => {
    const data = { name: "Ashwani Rajput" };
    //const data = null;

    if (data) {
      resolve(data);
    } else {
      reject(new Error("promise rejected"));
    }
  }, 2000);
});

//console.log(promise);

promise
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
