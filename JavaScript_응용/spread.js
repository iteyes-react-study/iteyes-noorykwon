/* spread 연산자 */
const cookie = {
  base: "cookie",
  madeIn: "korea"
};

const chocochipCookie = {
  ...cookie, //spread 연산자 - 객체의 값을 새로운 객체에 펼쳐줌
  toping: "chocochip"
};

const bluberryCookie = {
  ...cookie,
  toping: "blueberry"
}

console.log(bluberryCookie); //3개의 요소가 리턴


// 배열에서의 활용
const noTopingCookis = ["용감한쿠키", "천사맛쿠키"];
const topingCookis = ["달빛술사쿠키", "골드치즈쿠키", "푸른주스맛쿠키", "퓨어바닐라쿠키"];
const allCookies = [...noTopingCookis, "코코아맛쿠키", ...topingCookis];
console.log(allCookies); // "용감한쿠키", "천사맛쿠키", "코코아맛쿠키", "달빛술사쿠키", "골드치즈쿠키", "푸른주스맛쿠키", "퓨어바닐라쿠키"
