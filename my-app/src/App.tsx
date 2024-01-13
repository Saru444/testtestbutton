import { useState } from "react";
import "./App.css";
import Radiobutton from "./Radiobutton";
import { log } from "console";

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

  const [checked, setChecked] = useState(false);

  const [showQuestions, setShowQuestions] = useState(true);
  const [answerList, setAnswerList] = useState<any>([]);

  const [answerValue, setAnswerValue] = useState({});
  const [isChecked, setIsChecked] = useState(new Array(data.length).fill([]));
  console.log("isChecked", isChecked);

  //answerList not work like what I want and if I har let answerList ,then answerList push , it not work either
  const getAllChecked = (position: number, item: number | undefined) => {
    const updatedChecked = isChecked.map((value, index) => {
      if (index === position) {
        return value === item;
      }
      return value;
    });
    setIsChecked([...updatedChecked]);

    // setChecked(true);
    // setIsChecked([...isChecked, checked]);

    // if (item === undefined) return;
    setValue(item);
    setAnswer({ position, item });

    setAnswerList([...answerList, answer]);

    setAnswerValue({ item });
  };

  const onSubmit = () => {
    setShowQuestions(!showQuestions);
  };

  // console.log("checked", checked);
  // console.log("isChecked", isChecked);

  //console.log("value", value);
  // console.log("answer", answer);
  // console.log("answerList", answerList);
  // console.log("answerValue", answerValue);

  return (
    <div className="App">
      {showQuestions ? (
        <div>
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
          <button
            disabled={!isChecked.every((item) => item === false)}
            onClick={onSubmit}
          >
            submit
          </button>
        </div>
      ) : (
        <div>
          <p>Thank you for your cooperation!</p>
        </div>
      )}
    </div>
  );
}

export default App;
