/* 배열의 비 구조화 할당 (구조분해할당) */
let arr = ["one", "two", "three"];

let one = arr[0];
let two = arr[1];
let three = arr[3];

// 위 세번의 할당을 더 짧게 표현하면
let [four, five, six] = arr;
console.log(four, five, six);

// 배열의 선언분리 비구조화 할당
let [seven, eight, nine] = ["seven", "eight", "nine"]; 
console.log(seven, eight, nine);

// 선언분리 비구조화 할당시 기본값 셋팅
let [ten, eleven, twelve, thirteen = "thirteen"] = ["ten", "eleven", "twelve"]; 
console.log(ten, eleven, twelve, thirteen); //ten, eleven, twelve, thirteen


// swap
let a = 10;
let b = 20;

[a, b] = [b, a];
console.log(a, b) //20 10



/* 객체의 비 구조화 할당 */
let object = { apple: "apple", orange: "orange", banana: "banana"};
let { orange, apple, banana } = object;
console.log(orange, apple, banana); //orange, apple, banana - 순서가 아닌 키값을 기준으로 비구조화 할당이 이루어짐

// 다른 변수이름으로 사용하고 싶다면
let { orange: first, apple: second, banana:third  } = object;
console.log(first, second, third) // orange, apple, banana
