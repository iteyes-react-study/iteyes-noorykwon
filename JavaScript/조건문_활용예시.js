/* 조건문 활용 예시*/

// includes 활용
function isKoreanFood(Food) {
  if(["불고기", "떡볶이", "비빔밥"].includes(food)) {
    return true;
  }
  return false;
}

const food1 = isKoreanFood("불고기"); //true
const food2 = isKoreanFood("파스타"); //false


// Truthy_Falsy 활용
const meal = {
  한식: "불고기",
  중식: "멘보샤",
  일식: "초밥",
  양식: "스테이크",
  인도식: "카레" 
};

const getMeal = (mealType) => {
  return meal[mealType] || "굶기"
};

console.log(getMeal("중식")); //멘보샤
console.log(getMeal()); //굶기 
