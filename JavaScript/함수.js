/*
Non-Primitive 데이터 타입
- Object
- Array
- function
*/


/* [function] */
//함수 표현식
let hello = function() {
  return "안녕하세요 여러분";
}

//함수 선언식
fucntion helloFunc() {
  return "안녕하세요 여러분";
}
 
// 함수 선언식에서는 호이스팅(hoisting)이 적용되어 코드 순서에 관계없이 실행되나, 함수 표현식은 그렇지 않기 때문에 상황에 맞는 함수를 사용하면 됨

//함수 표현식을 화살표로 더 간단하게 표기 
let helloA = () => "안녕하세요 여러분";



/* 콜백 함수 */
// 함수를 변수로 넘겨주는 함수 (실습은 이후 예정)
