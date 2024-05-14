async function wait() {
  return new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
}

async function success() {
  await wait();
  return 'Success';
}

success()
.then(() => {
  console.log((new Date()).toISOString() +  ' Success');
})
.catch((err) => {
  console.log((new Date()).toISOString() + ' ' + err.message);
})
.finally(() => {
  console.log((new Date()).toISOString() + ' Finally');
});
console.log((new Date()).toISOString() + ' Other log');
// Output
// 2024-05-14T14:40:34.337Z Other log
// 2024-05-14T14:40:37.339Z Success
// 2024-05-14T14:40:37.341Z Finally
