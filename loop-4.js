async function wait() {
  return new Promise((resolve) => {
    setTimeout(resolve, 3000); // 3 seconds
  });
}

for (let i = 1; i <= 3; i++) {
  console.log(i + '周目の処理開始');
  console.log((new Date()).toISOString() + ' :log' + i);
  wait().then(() => {
    console.log((new Date()).toISOString() + ' :log' + (i * 10));
  })
  console.log((new Date()).toISOString() + ' :log' + (i * 100));
  console.log(i + '周目の処理終了');
}
// Output
// 1周目の処理開始
// 2024-05-14T14:19:29.683Z :log1
// 2024-05-14T14:19:29.683Z :log100
// 1周目の処理終了
// 2周目の処理開始
// 2024-05-14T14:19:29.683Z :log2
// 2024-05-14T14:19:29.683Z :log200
// 2周目の処理終了
// 3周目の処理開始
// 2024-05-14T14:19:29.683Z :log3
// 2024-05-14T14:19:29.683Z :log300
// 3周目の処理終了
// 2024-05-14T14:19:32.685Z :log10
// 2024-05-14T14:19:32.686Z :log20
// 2024-05-14T14:19:32.687Z :log30
