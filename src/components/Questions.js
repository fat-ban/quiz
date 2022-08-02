import React, { useState, useEffect } from "react";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "antd/dist/antd.css";
import { Button } from "antd";
import Resume from "./Resume";
import Answer from "./Answer";

const Questions = ({ data }) => {
  const [questions, setQuestions] = useState(data);
  const [testResponse, setTestResponse] = useState(false);
  const [counterQuest, setCounterQuest] = useState(0);
  const [scoreCounter, setScoreCounter] = useState(0);
  const [disabledButton, setDisabledButton] = useState(true);
  const [responseQuest, setResponseQuest] = useState(false);
  const [keepScore, setKeepScore] = useState(false);
  const [changeClass, setChangeClass] = useState(false);
  const [indexQuest, setIndexQuest] = useState([]);
  console.log(testResponse);
  //console.log(questions.data[9].answer);

  useEffect(() => {
    console.log(scoreCounter);
  }, [scoreCounter]);

  const updateScore = () => {
    console.log("updateScore");
    !keepScore && setScoreCounter(scoreCounter + 1);
  };

  const handleClick = (choice) => {
    setDisabledButton(false);
    setKeepScore(true);
    //setChangeClass(true)
    if (choice === questions.data[counterQuest].answer) {
      setTestResponse(true);
      updateScore();
      console.log(questions.data);
      //console.log(questions.data.indexOf(data[counterQuest]))
      console.log(counterQuest);
      setIndexQuest([...indexQuest, counterQuest]);

      //toastify succuss
      toast.success("True Answer", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      setTestResponse(false);
      toast.warn("false Answer", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      //get choice false answer to display in the resume component
    }
  };
  console.log(indexQuest);

  const handleClickNextQuestion = () => {
    // e.preventDefault()
    console.log("nextQuestion");
    setResponseQuest(true);
    setKeepScore(false);
    setCounterQuest(counterQuest + 1);

    setDisabledButton(true);
    //setChangeClass(true)
    //setClickAnswer(false)
  };

  return (
    <div className="container">
      {counterQuest < 10 ? (
        <div className="quiz-container">
          <div
            // key={index}
            className="card-quest"
          >
            <div className="header-score">
              <h2>
                Question {counterQuest + 1}/{questions.data.length}
              </h2>
            </div>

            <div className="question">
              <h3>{questions.data[counterQuest].quest}</h3>
            </div>
            <div className="choice">
              
              <Answer
                questions={questions}
                counterQuest={counterQuest}
                changeClass={changeClass}
                handleClick={handleClick}
              />
              <Button
                type="primary"
                onClick={() => handleClickNextQuestion(counterQuest)}
                disabled={disabledButton}
                
              >
                Next
              </Button>
            </div>
          </div>

          {/* ))}*/}
        </div>
      ) : (
        <div className="section-resume">
          <Resume
            scoreCounter={scoreCounter}
            setScoreCounter={setScoreCounter}
            questions={questions.data}
            setCounterQuest={setCounterQuest}
            indexQuest={indexQuest}
            setIndexQuest={setIndexQuest}
          />
        </div>
      )}
    </div>
  );
};

export default Questions;
