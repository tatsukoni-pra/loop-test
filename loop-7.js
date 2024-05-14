async function wait() {
  return new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
}

async function error() {
  await wait();
  throw new Error('Error');
}

error()
.then(() => {
  console.log((new Date()).toISOString() + ' Success');
})
.catch((err) => {
  console.log((new Date()).toISOString() + ' ' + err.message);
})
.finally(() => {
  console.log((new Date()).toISOString() + ' Finally');
});
console.log((new Date()).toISOString() + ' Other log');
// Output
// 2024-05-14T14:41:42.990Z Other log
// 2024-05-14T14:41:45.994Z Error
// 2024-05-14T14:41:45.994Z Finally
