import { useState } from "react";
type Props = {
  type: number;
  id: number;
  isChecked: boolean;
  onClick: (id: number) => void;
  setIsChecked: (isChecked: boolean) => void;
  getAllChecked: (item: number | undefined) => void;
};

const Radiobutton = ({
  type,
  onClick,
  id,
  setIsChecked,
  getAllChecked,
}: Props) => {
  const [value, setValue] = useState<number | undefined>(0);

  const onAnswer = (radioValue: number) => {
    setValue(radioValue);
  };
  console.log("vvv", value);

  return (
    <div>
      {type === 1 ? (
        <>
          <p className="mr-2 text-xs">inte mycket</p>
          {Array(5)
            .fill(0)
            .map((_, index) => index + 1)
            .map((score) => (
              <div key={score} className="mr-1 flex flex-col items-center">
                <input
                  onChange={() => {
                    onAnswer(score);
                  }}
                  onClick={() => getAllChecked(value)}
                  id="default-radio-1"
                  type="radio"
                  checked={value === score}
                  className="h-4 w-4 border-gray-300 bg-gray-100 text-mountain-meadow-500"
                />
                <label className="text-sm font-medium text-gray-900">
                  {score}
                </label>
              </div>
            ))}{" "}
          <p className="ml-2 text-xs">mycket</p>
        </>
      ) : (
        <div>
          {Array(2)
            .fill(0)
            .map((_, index) => index + 1)
            .map((score) => (
              <div key={score} className="mr-1 flex flex-col items-center">
                <input
                  onChange={() => {
                    onAnswer(score);
                  }}
                  onClick={() => onClick(id)}
                  id="default-radio-1"
                  type="radio"
                  checked={value === score}
                  className="h-4 w-4 border-gray-300 bg-gray-100 text-mountain-meadow-500"
                />
                <label className="text-sm font-medium text-gray-900">
                  {score === 1 ? "Ja" : "Nej"}
                </label>
              </div>
            ))}
        </div>
      )}
      {/* <button disabled={value === 0}>send</button> */}
    </div>
  );
};
export default Radiobutton;