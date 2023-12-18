import React, { useEffect, useState } from "react";

const UnmountTest = () => {
  useEffect(() => {
    console.log("Mount!");

    return () => {
      // Unmount 시점에 실행되게 됨
      console.log("Unmount");
    };
  }, []);

  return <div>Unmount Testing Component</div>;
};

const Lifecycle = () => {
  // const [count, setCount] = useState(0);
  // const [text, setText] = useState("");

  // // 컴포넌트 마운트시점에만 쓸 경우, 두번째 인자에 빈 배열을 넣으면 됨!
  // useEffect(() => {
  //   console.log("Mount!");
  // }, []);

  // // 배열이 없을 경우, 업데이트되는 매시점에 콜백함수 시행
  // useEffect(() => {
  //   console.log("Update!");
  // });

  // // count state 가 변하는 순간 콜백함수 실행
  // useEffect(() => {
  //   console.log(`count is update : ${count}`);
  //   if (count > 5) {
  //     alert("count가 5를 넘었습니다. 1로 초기화 됩니다");
  //     setCount(1);
  //   }
  // }, [count]);

  // useEffect(() => {
  //   console.log(`text is update : ${text}`);
  // }, [text]);

  // return (
  //   <div style={{ padding: 20 }}>
  //     <div>
  //       {count}
  //       <button onClick={() => setCount(count + 1)}>+</button>
  //     </div>
  //     <div>
  //       <input value={text} onChange={(e) => setText(e.target.value)} />
  //     </div>
  //   </div>
  // );

  const [isVisible, setIsVisible] = useState(false);
  const toggle = () => setIsVisible(!isVisible);

  // 단락회로평가에 따른 컴포넌트 동적변화
  return (
    <div style={{ padding: 20 }}>
      <button onClick={toggle}>ON/OFF</button>
      {isVisible && <UnmountTest />}
    </div>
  );
};

export default Lifecycle;
