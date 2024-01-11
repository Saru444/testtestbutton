import { useState } from "react";
import "./App.css";
import Radiobutton from "./Radiobutton";

const data = [
  {
    id: 0,
    question: "Hur mycket har du sovit i natt?",
    questionType: 1,
  },
  { id: 1, question: "Hur mycket har du sovit i helgen?", questionType: 1 },
  { id: 2, question: "Hur mycket har du sovit i år?", questionType: 2 },
];
function App() {
  const [answer, setAnswer] = useState({});
  const [value, setValue] = useState<number | undefined>(0);
  const [isChecked, setIsChecked] = useState<boolean[]>([]);
  const [checked, setChecked] = useState(false);
  const [answerList, setAnswerList] = useState<any>([]);

  //answerList not work like what I want and if I har let answerList ,then answerList push , it not work either
  const getAllChecked = (position: number, item: number | undefined) => {
    // const updatedChecked = isChecked.map((item, index) => {
    //   return index === position ? !item : item;
    // });
    // setIsChecked([...updatedChecked]);

    // setChecked(true);
    // setIsChecked([...isChecked, checked]);

    // if (item === undefined) return;
    setValue(item);
    setAnswer({ position, item });

    setAnswerList([...answerList, answer]);
  };

  // console.log("checked", checked);
  // console.log("isChecked", isChecked);

  //console.log("value", value);
  console.log("answer", answer);
  console.log("answerList", answerList);

  return (
    <div className="App">
      {data.map((item, index) => {
        return (
          <div key={index}>
            <div>{item.question}</div>
            <Radiobutton
              type={item.questionType}
              // onClick={() => getAllChecked(item.id)}
              id={item.id}
              // setIsChecked={() => setChecked(!checked)}
              // isChecked={!checked}
              onClick={getAllChecked}
            />
          </div>
        );
      })}
      <br />
      <button disabled={true}>submit</button>
    </div>
  );
}

export default App;
