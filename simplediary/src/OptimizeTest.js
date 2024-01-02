import React, { useState } from "react";

const CounterA = React.memo(({ count }) => {
  return <div>{count}</div>;
});

const CounterB = ({ obj }) => {
  return <div>{obj.count}</div>;
};

const areEqual = (prevProps, nexpProps) => {
  if (prevProps.obj.count === nexpProps.obj.count) {
    return true;
  }
  return false;
};

const MemoizedCounterB = React.memo(CounterB, areEqual);

const OptimizeTest = () => {
  const [count, setCount] = useState(1);
  const [obj, setObj] = useState({
    count: 1,
  });

  return (
    <div style={{ padding: 50 }}>
      <div>
        <h2>Counter A</h2>
        <CounterA count={count} />
        <button onClick={() => setCount(count)}>A button</button>
      </div>
      <div>
        <h2>Counter B</h2>
        <MemoizedCounterB obj={obj} />
        <button
          onClick={() =>
            setObj({
              count: obj.count,
            })
          }
        >
          B button
        </button>
      </div>
    </div>
  );
};

/*
두개의 버튼을 클릭할 때, B버튼만 리렌더링됨.
객체나 함수 또는 배열과 같은 비원시 타입의 자료형을 비교할 때 
주소에 의한 비교 (얕은 비교) 를 하기 때문.

객체들은 생성되자마자 고유한 메모리주소를 가지게 되고
다르다고 판단하게 됨
*/

export default OptimizeTest;
