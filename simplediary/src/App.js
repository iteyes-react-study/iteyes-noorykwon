import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const dummyList = [
  {
    id: 1,
    author: "taja",
    content: "하이",
    emotion: 5,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "taja",
    content: "하이2",
    emotion: 4,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "taja",
    content: "하이3",
    emotion: 2,
    created_date: new Date().getTime(),
  },
  {
    id: 4,
    author: "taja",
    content: "하이4",
    emotion: 1,
    created_date: new Date().getTime(),
  },
];

function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
