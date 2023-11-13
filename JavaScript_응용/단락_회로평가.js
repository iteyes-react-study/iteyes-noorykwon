/* 단락 회로평가 */
// 왼쪽에서 오른쪽으로 연산하게 되는 논리연산자의 연산 순서를 이용하는 문법
// 뒤쪽 피연산자를 볼 필요없이 연산을 끝내는 것
console.log(false && true); //앞단이 false 이므로 false
console.log(true || false); //앞단이 true 이므로 true


const getName = (person) => {
  const name = person && person.name; //person 이 falsy 할 경우, 뒤쪽 피연산자를 보지않고 값을 그대로 리턴함
  return name || "객체가 아닙니다"; // person.name 요소가 존재했을 경우 리턴, 아닐 경우 "객체가 아닙니다."
};

let person;
const name = getName(person);
console.log(name);
