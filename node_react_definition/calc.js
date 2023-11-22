const add = (a, b) => a + b;
const sub = (a, b) => a - b;

// node 를 통해 실행결과를 확인할 수 있음 (node calc.js)

// 모듈 내보내기 : nodejs의 CommonJs 모듈 시스템
module.exports = {
    moduleName: "calc module",
    add: add,
    sub: sub,
}
