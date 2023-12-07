import React from "react"
// import './App.css'; //css를 외부에 위치하는 방식
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';
import Counter from "./Counter";
import Container from "./Container";


function App() {
  let name = "타야"

  const style = {  //css를 내부에 위치하는 방식
    App : {
      backgroundColor: 'while'
    },
    h2 : {
      color : "red"
    },
    bold_text : {
      color : "green"
    }
  }

  const number = Math.floor(Math.random()*10);


  /*
  리액트에서 컴포넌트에게 데이터를 전달하는 가장 기본적이고도 효율적이고 강력한 방법인 props
   */
  const counterProps = { //prop은 객체의 spread 연산자(아래참조)로도 전달 가능
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    initialValue: 5,
  }


  return (
    <Container>
      <div style={style.App}>
        <MyHeader />
        <Counter a={1} initialValue={5} />
        <Counter {...counterProps} /> 
      </div>
    </Container>
  );
}

export default App; // es모듈 시스템 (module.exports={} / 이건 common js 모듈 시스템)

/*
import React from "react"

</React.Fragment> 태그로 최상위 하나의 태그로 묶는 역할을 할 수 있음

빈태그도 가능
*/