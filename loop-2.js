async function wait() {
  return new Promise((resolve) => {
    setTimeout(resolve, 3000); // 3 seconds
  });
}

console.log((new Date()).toISOString() + ' :log1');
wait().then(() => {
  console.log((new Date()).toISOString() + ' :log2');
})
console.log((new Date()).toISOString() + ' :log3');
// Output
// 2024-05-14T14:12:44.255Z :log1
// 2024-05-14T14:12:44.257Z :log3
// 2024-05-14T14:12:47.260Z :log2
