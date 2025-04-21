const promise1 = () => {
  return new Promise((resolve, reject) => {
    console.log("Promise1 executed");
    reject("Promise1 Rejected");
  });
};
const promise2 = () => {
  return new Promise((resolve, reject) => {
    console.log("Promise2 executed");
    reject("Promise2 Rejected");
  });
};
const promise3 = () => {
  return new Promise((resolve, reject) => {
    console.log("Promise3 executed");
    resolve("Promise3 resolved");
  });
};

const Promises = [promise1(), promise2(), promise3()];

// Promise.all(Promises).then((d)=>{
//   console.log(d);
// }).catch((err)=>{
//     console.log(err,'Error');
// });

// Promise.allSettled(Promises).then((d)=>{
//     console.log(d);
//   }).catch((err)=>{
//       console.log(err,'Error');
//   });

// Promise.race(Promises).then((d)=>{
//     console.log(d);
//   }).catch((err)=>{
//       console.log(err,'Error');
//   });

Promise.any(Promises)
  .then((d) => {
    console.log(d);
  })
  .catch((err) => {
    console.log(err, "Error");
  });
