async function wait() {
  return new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
}

async function error() {
  await wait();
  throw new Error('Error');
}

class CustomError extends Error {}

async function error2() {
  await wait();
  throw new CustomError('CustomError');
}

error2()
.then(() => {
  console.log((new Date()).toISOString() + ' Success');
})
.catch((err) => {
  if (err instanceof CustomError) {
    console.log((new Date()).toISOString() + ' カスタムエラー ' + err.message);
  } else {
    console.log((new Date()).toISOString() + ' 通常のエラー ' + err.message);
  }
})
.finally(() => {
  console.log((new Date()).toISOString() + ' Finally');
});
console.log((new Date()).toISOString() + ' Other log');
// Output
// 2024-05-14T14:49:43.876Z Other log
// 2024-05-14T14:49:46.878Z カスタムエラー CustomError
// 2024-05-14T14:49:46.879Z Finally
