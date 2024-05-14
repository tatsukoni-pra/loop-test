async function wait() {
  return new Promise((resolve) => {
    setTimeout(resolve, 3000); // 3 seconds
  });
}

console.log((new Date()).toISOString() + ' :log1');
await wait();
console.log((new Date()).toISOString() + ' :log2');
await wait();
console.log((new Date()).toISOString() + ' :log3');
// Output
// 2024-05-14T14:13:51.981Z :log1
// 2024-05-14T14:13:54.984Z :log2
// 2024-05-14T14:13:57.983Z :log3
