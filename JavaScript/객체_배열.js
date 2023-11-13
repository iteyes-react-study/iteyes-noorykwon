/* 객체 */
// 객체 생성
// 객체 생성자 이용하기 
let person1 = new Object();
// 객체 리터럴 방식
let person2 = {};

let person3 = {
  key: "value", // 한쌍을 프로퍼티(객체 프로퍼티) 라고 한다.
  key1: "value2"
}

// 점표기법으로 value값 꺼내기
console.log(person3.key1);
// 프로퍼티 추가
person3.location = "한국";
// 프로퍼티 삭제
delete person3.location;

// 괄호표기법으로 value값 꺼내기
console.log(person3["key"]; //키값은 문자형으로 넣어야함
// 프로퍼티 추가
person3["gender"] = "남성";
// 프로퍼티 삭제
delete person3["gender"];
// 프로퍼티 삭제를 해도 메모리상의 변화는 없기에 (단순 연결만 끊는 것임) 아래의 방법을 더 추천함
person3["gender"] = null;

// const 변수도 프로퍼티의 추가, 삭제는 가능 (객체의 프로퍼티의 추가, 삭제는 변수의 훼손이 아님)


// 객체 내 함수실행하기 예제
const person = {
  name: "이정환",
  age: 25,
  say: function() {console.log(`안녕 나는 ${this.name`); }
};

console.log(`name : ${"name" in person}`); //true
console.log(`age : ${"age" in person}`); //true
console.log(`gender : ${"gender" in person}`); //false





/* 배열 */
// 배열 생성
let arr = new Array();
let arr = []; // 배열 리터럴 방식

// 배열 원소 추가
arr.push(6);

// 배열의 길이
console.log(arr.length);
