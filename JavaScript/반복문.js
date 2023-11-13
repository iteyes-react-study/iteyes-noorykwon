/* 반복문 예제 */
let person = {
  name: "권누리",
  age: 25,
  tail: 175
};

const personKeys = Object.keys(person);

for (let i=0; i<personKeys.length; i++) {
  const curKey = personKeys[i];
  const curValue = person[curKey];

  console.log(`${curKey} : ${curValue}`);
}

const personValues = Object.keys(person);

for (let i=0; i<personValues.length; i++) {
  console.log(personValues)
}
