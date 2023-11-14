/* API & fetch */

// fetch
let rawResponse = fetch("https://jsonplaceholder.typicode.com/posts").then((res) => { // Promise 리턴
  console.log(res); //응답값 자체를 반환
})

async function getData() {
  let rawResponse = await fetch("https://jsonplaceholder.typicode.com/posts") 
  let jsonResponse = await rawResponse.json();
  console.log(jsonResponse);
};

getData();
