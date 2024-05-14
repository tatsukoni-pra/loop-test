async function wait() {
  return new Promise((resolve) => {
    setTimeout(resolve, 3000); // 3 seconds
  });
}

console.log((new Date()).toISOString() + ' :log1');
wait();
console.log((new Date()).toISOString() + ' :log2');
wait();
console.log((new Date()).toISOString() + ' :log3');
// Output
// 2024-05-14T14:11:47.139Z :log1
// 2024-05-14T14:11:47.142Z :log2
// 2024-05-14T14:11:47.142Z :log3
