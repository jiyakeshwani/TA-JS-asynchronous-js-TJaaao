let promise1 = new Promise((res, rej) => {
  setTimeout(res(21), 1000);
  console.log("21");
});
let promise2 = new Promise((res, rej) => {
  setTimeout(res(26), 2000);
  console.log("26");
});
let promise3 = new Promise((res, rej) => {
  setTimeout(res(98), 3000);
  console.log("98");
});
let promise4 = new Promise((res, rej) => {
  setTimeout(res(1), 4000);
  console.log("1");
});
Promise.all([promise1, promise1, promise3, promise4]);

const one = new Promise((resolve, reject) =>
  setTimeout(() => resolve("Arya"), 1000)
);
const two = new Promise((resolve, reject) =>
  setTimeout(() => reject(new Error("Whoops!")), 2000)
);
const three = new Promise((resolve, reject) =>
  setTimeout(() => resolve("John"), 3000)
);
Promise.race([one, two, three]).then((value) => {
  console.log(value);
});
Promise.all([
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("Arya"), 1000);
  }),
  "Sam",
  { name: "John" },
]).then(console.log);
// output = ['arya' , 'sam' , {name:"john"}]
