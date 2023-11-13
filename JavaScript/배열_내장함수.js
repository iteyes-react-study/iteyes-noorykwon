/* 배열 내장함수 예제 */
const arr = [1, 2, 3, 4];

for (let i=0; i<arr.length; i++) {
  console.log(i);
}

// forEach
// 위 for 반복문 배열 내장함수로 변환
arr.forEach((elm) => console.log(elm));

// map
const newArr = arr.map((elm) => {
  return elm * 2;
});

// includes
console.log(arr.includes(3)); //true

// indexOf
console.log(arr.indexOf(3)); //해당 값의 인덱스값인 2, 값이 존재하지 않는 경우 -1 리턴

// findIndex - 객체가 포함된 배열에서 인덱스값을 찾을 때
const arr1 = [
  { num: 1, color: "red"},
  { num: 2354, color: "black"},
  { num: 23, color: "blue"},
  { num: 789, color: "green"},
  { num: 564, color: "blue"}
]
console.log(arr1.findIndex((elm) => elm.color === "blue")); //2 중복값이 존재한다면 첫번째 인덱스 값 리턴

// find - 객체 자체값을 리턴
console.log(arr1.find((elm) => elm.color === "green"));

// filter
console.log(arr1.filter((elm) => elm.color==="blue")); // 조건에 부합하는 2개의 객체들만 포함된 배열 리턴

// slice
console.log(arr1.slice(0, 2)); //시작지점 0부터 끝지점 2까지 객체들만 포함된 배열 리턴

// concat
const arr2 = [
  { num: 7525, color: "orange"},
  { num: 178, color: "pink"}
];

console.log(arr1.concat(arr2));

// sort
let chars = ["나", "다", "가"];
chars.sort();
console.log(chars); // ["가", "나", "다"] 원본배열의 순서를 sorting

let numbers = [5, 8, 4, 7, 6];
numbers.sort();
console.log(numbers); // 사전순으로 정렬하기에 작은순으로 정리되지 않음

const compare = (a, b) => {
  if (a > b) {
    return 1; //뒤로보냄
  }
  if (a < b) {
    return -1; //앞으로보냄
  }
  return 0;
};

// join
const arr3 = ["권누리", "님", "안녕하세요", "또오셨군요"];
console.log(arr.join(" ")); // "권누리 님 안녕하세요 또오셨군요"
