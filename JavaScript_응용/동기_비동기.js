/* 동기 & 비동기 */

/* 
쓰레드의 task 들의 작업이 오래 걸리는 경우 성능상의 문제가 있을 수 있음
js 는 싱글쓰레드 방식. => 쓰레드가 하나 더라도 여러작업을 동시에 실행시킴
동기적이지 않게 여러개의 작업을 동시에 수행하게 하는 방식 => 비동기처리 & 논블로킹방식(쓰레드가 하나의 작업을 수행할 때 다른작업을 할 수 있음)
*/

// 동기적 방식
function taskA() {
  console.log("A 작업 끝");
};

taskA();
console.log("코드 끝"); //A 작업 끝이 먼저 찍힘


// 비동기적 방식
function taskB() {
  setTimeout(()=>{
    console.log("B TASK END");
  }, 20000)
};
 
taskB();
console.log("코드 끝") //"코드 끝"이 먼저 찍힘


function taskC(a, b, cb) {
  setTimeout(()=>{
    const res = a + b;
    cb(res);
  }, 3000)
};
 
taskC(3, 4, (res) => {
  console.log("C TASK RESULT : ", res)
});
console.log("코드 끝"); //"코드 끝"이 먼저 찍힘

/*
JS Engine 은 어떻게 동기적인 코드와 비동기적인 코드를 구분하는가?
  Call Stack : 코드의 실행에 따라서 호출 스택을 쌓는 영역
  자바 스크립트는 call stack 하나만 존재. (싱글쓰레드)

  setTimeout 함수는 다른 함수들과는 달리 비동기 함수이기 때문에 call stack -> web APIs 로 넘김
  => call stack 은 다음 작업을 수행할 수 있게 됨
  setTimeout 의 콜백함수는 call back Queue 로 이동 -> call stack(call stack 내 메인컨텍스트를 제외한 다른 함수가 없을 경우에) 이동
  (event loop 가 call stack 내 메인컨텍스트를 제외한 다른 함수가 있는지 지속 확인)
*/

// 콜백이 계속 깊어져서 코드의 가독성이 떨어질 때 : 콜백 지옥🔥
// Promise 객체 : 자바스크립트의 비동기처리를 돕는 객체. 직관적으로 표현 가능 

/*
비동기 작업이 가질 수 있는 3가지 상태
  - pending 대기 ( -> resolve 해결 or reject 거부)
  - fulfiiled 성공 
  - rejected 실패
*/

function isPositive(number, resolve, reject) {
  setTimeout(()=> {
    if(typeof number === 'number') {
      // resolve 되었을 때
      resolve(number >=0? "양수" : "음수");
    } else {
      // reject 되었을 때
      reject("주어진 값이 숫자형 값이 아닙니다.");
    }
  }, 2000)
};

// isPositive(10, (res) => {
//   console.log("성공적으로 수행됨 :", res)
// }, (err) => {
//   console.log("실패 하였음 : ", err)
// });

function isPositiveP(number) {
  const executor = (resolve, reject) => { //실행자
    setTimeout(()=> {
      if(typeof number === 'number') {
        // resolve 되었을 때
        resolve(number >=0? "양수" : "음수");
      } else {
        // reject 되었을 때
        reject("주어진 값이 숫자형 값이 아닙니다.");
      }
    }, 2000);
  };

  const asyncTask = new Promise(executor);
  return asyncTask;
};

const res = isPositiveP(101);  
const rej = isPositiveP([]); 

res.then((res)=>{console.log("작업 성공 : ", res)}).catch((err)=>{console.log("작업 실패 : ", err)}); //작업 성공 :  양수
rej.then((res)=>{console.log("작업 성공 : ", res)}).catch((err)=>{console.log("작업 실패 : ", err)}); //작업 실패 :  주어진 값이 숫자형 값이 아닙니다.  


// 여러 함수의 비동기 처리
function taskA(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a + b;
      resolve(res);
    }, 3000);
  });
}

function taskB(a) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a * 2;
      resolve(res);
    }, 1000);
  });
}

function taskC(a) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a * -1;
      resolve(res);
    }, 2000);
  });
}

taskA(5, 1).then((a_res) => {
  console.log("A RESULT : ", a_res);
  return taskB(a_res);
}).then((b_res) => {
  console.log("B RESULT : ", b_res);
  return taskC(b_res);
}).then((c_res) => {
  console.log("C RESULT : ", c_res);
});
