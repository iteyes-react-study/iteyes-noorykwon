import React, { useContext, useRef, useState } from "react";
import { DiaryDispatchContext } from "./App";

const DiaryEditor = () => {
  // const [author, setAuthor] = useState("");
  // const [content, setContent] = useState("");

  const { onCreate } = useContext(DiaryDispatchContext);

  // 객체로 state 를 묶기
  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: 1,
  });

  // 상태변화 이벤트핸들러도 하나로 합칠 수 있다.
  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  // 조건이 부합하지 않는 경우 alert 이 아닌 FOCUS주기
  const authorInput = useRef();
  const contentInput = useRef();

  const handleSubmit = () => {
    if (state.author.length < 1) {
      authorInput.current.focus();
      return;
    }

    if (state.content.length < 5) {
      contentInput.current.focus();
      return;
    }

    onCreate(state.author, state.content, state.emotion);
    alert("저장 성공");
    setState({
      author: "",
      content: "",
      emotion: 1,
    });
  };

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          ref={authorInput}
          name="author"
          value={state.author}
          onChange={
            // (e)=>{
            // setState({
            // // content: state.content // 추후에 객체의 항목이 많아진다면?
            // // 스프레드 연산자로 한번에 표기하기. 꼭 먼저 스프레드연산자 이후에 변경하는 프로퍼티는 마지막에 기재하기
            // ...state,
            // author: e.target.value
            // })}

            handleChangeState
          }
        />
      </div>
      <div>
        <textarea
          ref={contentInput}
          name="content"
          value={state.content}
          onChange={handleChangeState}
        />
      </div>
      <div>
        <span>오늘의 감정점수 : </span>
        <select
          name="emotion"
          value={state.emotion}
          onChange={handleChangeState}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>일기 저장하기</button>
      </div>
    </div>
  );
};

export default React.memo(DiaryEditor);
