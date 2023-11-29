import React from "react"
// import './App.css'; //css를 외부에 위치하는 방식
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';


function App() {
  let name = "타야"

  const style = {  //css를 내부에 위치하는 방식
    App : {
      backgroundColor: 'black',
    },
    h2 : {
      color : "red"
    },
    bold_text : {
      color : "green"
    }
  }

  const number = Math.floor(Math.random()*10);

  return (
    <div style={style.App}>
      <MyHeader />
      <header className="App-header">
        <h2 style={style.h2}>안녕 리액트</h2>
        <b id="bold_text" style={style.bold_text}>
          React!! <br />
        {number}는 : {number % 2 === 0? "짝수" : "홀수"}
        </b>
      </header>
    </div>
  );
}

export default App; // es모듈 시스템 (module.exports={} / 이건 common js 모듈 시스템)

/*
import React from "react"

</React.Fragment> 태그로 최상위 하나의 태그로 묶는 역할을 할 수 있음

빈태그도 가능
*/