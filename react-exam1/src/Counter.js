import React, {useState} from "react";
import OddEvenResult from "./OddEvenResult";


const Counter = (props) => {
    // const Counter = ({ initialValue }) => { // 비구조화 할당을 통해 특정값만 꺼내쓸수도 있다

    // 0에서 출발해서 1씩 증가하고 1씩 감소하는 count 상태

    const [count, setCount] = useState(props.initialValue);

    const onIncrease = () => {
        setCount(count + 1);
        // 컴포넌트 내 count가 +1 될때 마다 해당 컴포넌트를 리렌더하게 됨
    };

    const onDecrease = () => {
        setCount(count - 1);
    }

    // 여기선 한개만 만들었지만 여러개의 state를 한개의 컴포넌트에도 포함할 수 있음
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
            <OddEvenResult count={count} />
        </div>
    )
}

Counter.defaultProps={ // props의 기본값을 설정하여 에러방지
    initialValue: 0
}

export default Counter;