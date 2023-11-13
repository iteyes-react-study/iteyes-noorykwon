/* Truthy & Falsy */
let a = "string";

if(a) {
  console.log("TRUE");
} else {
  console.log("FALSE")
}; // TRUE 리턴

/*
a 값이 "" 인 경우 FALSE,
      "string" 인 경우 TRUE,
      42 인 경우 TRUE,
      [] 인 경우 TRUE,
      {} 인 경우 TRUE,
      undefined 인 경우 FALSE,
      null 인 경우 FALSE,
      0 or -1 인 경우 FALSE,
      NaN 인 경우 FALSE
      Infinity 인 경우 TRUE

=> boolean 이 아니더라도 js 가 참으로 인식하는 값이 있음.
    true 가 아니여도 참으로 평가되는 Truthy,
    false 가 아니여도 거짓으로 평가되는 Falsy
*/

const getName = (person) => {
  if (!person) {
    return "객체가 아닙니다" //falsy한 성질을 이용하여 null 과 undefined 예외처리
  }
  return person.name;
}

let person = { name: "권누리"};
const name = getName(person);
console.log(name);
