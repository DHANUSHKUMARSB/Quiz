import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import data from "./data.js";
const min = Math.ceil(0);
const max = Math.floor(9);
var num = Math.floor(Math.random() * (max - min + 1)) + min;
function App() {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [score, setScore] = useState(null);
  const [showCorrectAnswers, setShowCorrectAnswers] = useState(false);
  console.log(num+1);
  const handleOptionSelect = (questionIndex, optionKey) => {
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [questionIndex]: optionKey,
    }));
  };

  const handleSubmit = () => {
    // Calculate the score
    const newScore = data[num].reduce((totalScore, qn, index) => {
      return selectedOptions[index] === qn.answer ? totalScore + 1 : totalScore;
    }, 0);

    // Update the state with the score
    setScore(newScore);
    // Show correct answers
    setShowCorrectAnswers(true);
  };

  return (
    <div className="container">
      <h1 className="num">{num + 1}</h1>{" "}
      <h1 className="num">{data.length}</h1>{" "}
      {data[num].map((qn, index) => (
        <div className="qns btn" key={index}>
          <p className="qn">{`${index + 1}. ${qn.question}`}</p>
          <div>
            {Object.entries(qn.options).map(([key, value]) => (
              <label key={key} style={{ marginRight: "10px" }}>
                <input
                  type="radio"
                  name={`question_${index}`}
                  checked={selectedOptions[index] === key}
                  onChange={() => handleOptionSelect(index, key)}
                  disabled={showCorrectAnswers}
                />
                {`${key}. ${value}`}
              </label>
            ))}
          </div>
          {showCorrectAnswers && selectedOptions[index] !== qn.answer && (
            <p style={{ color: "green" }}>
              Correct Answer: {qn.answer.toUpperCase()}
            </p>
          )}
        </div>
      ))}
      {!showCorrectAnswers && (
        <button className="btn" onClick={handleSubmit}>
          Submit
        </button>
      )}
      {score !== null && (
        <div className="qns">
          <p>Your Score: {score}</p>
          {score === data[num].length
            ? "congradulation chella kutty"
            : "Poi padi Kundi"}
        </div>
      )}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
