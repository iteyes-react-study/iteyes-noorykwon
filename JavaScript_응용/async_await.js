/* async & await - 직관적인 비 동기 처리 */

// async
function helld() {
  return "hello";
}

async function helloAsync() {
  // Promise를 리턴하는 비동기 함수가 된다.
  return "hello Async";
}

helloAsync().then((res) => {
  console.log(res); //"hello Async" 출력
});

// await을 사용해서 promise를 반환하는 비동기 함수를 동기적인 함수를 호출한 것처럼 사용
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms); //resolve 함수를 콜백함수 자체로 넘겨줄수 있음
  });
}

async function delayHelloAsync() {
  await delay(3000);
  return "hello async";
}

delayHelloAsync().then((res) => {
  console.log(res);
});

/* 
비동기함수가 동기적인 함수처럼 작동 (해당 로직 끝날때까지 다음 로직 실행안됨). 
await은 async 함수 내에서만 사용 가능.
*/
