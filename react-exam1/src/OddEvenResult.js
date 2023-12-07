
// 리액트의 컴포넌트는 1) state 가 바뀔 때 마다 리렌더
//                   2) props 가 바뀔 때 마다 리렌더
//                   3) 부모 컴포넌트가 바뀌면 리렌더


const OddEvenResult = ({ count }) => {
    return <>{count % 2 === 0 ? "짝수" : "홀수"}</>;
}

export default OddEvenResult;