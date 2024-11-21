const promise1 = Promise.reject("Some error");

promise1
  .catch((err) => {
    // 10
    console.log("92", err); // 92 10
    return 20;
  })
  .then(null, (err) => {
    console.log("90", err); // 90 some error
    return 10;
  })
  .then((data) => {
    console.log(data);
  });
