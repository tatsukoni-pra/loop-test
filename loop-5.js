async function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

let intArr = [];
for (let i = 1; i <= 3; i++) {
  intArr.push(i);
  wait(3000).then(() => {
    intArr = intArr.filter((intVal) => intVal !== i);
  })
}

await wait(1000);
console.log(intArr);
await wait(1000);
console.log(intArr);
await wait(1000);
console.log(intArr);

// Output
// [ 1, 2, 3 ]
// [ 1, 2, 3 ]
// []
