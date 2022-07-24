import React, { useState, useEffect } from "react";

import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import "antd/dist/antd.css";
import { Button } from 'antd';
import Resume from "./Resume"


const Questions = ({ data }) => {
  const [questions, setQuestions] = useState(data);
  const [testResponse, setTestResponse] = useState(false);
  const [counterQuest, setCounterQuest] = useState(0);
  const [scoreCounter, setScoreCounter] = useState(0);
  const [disabledButton, setDisabledButton] = useState(true);
  const [responseQuest, setResponseQuest] = useState(false);
  //state 
  //const [choiceAnswer, setChoiceAnswer] = useState([])
  //const [clickAnswer, setClickAnswer] = useState(false)

  //console.log(questions.data[counterQuest].choices);
  console.log(testResponse);
  //console.log(questions.data[9].answer);

   useEffect(() => {
    console.log(scoreCounter)
  }, [scoreCounter]);

  const updateScore = () => {
    console.log("updateScore");
     setScoreCounter(scoreCounter + 1)
  };

  const handleClick = (choice) => {
    setDisabledButton(false);
    //setChoiceAnswer(choiceAnswer.push(choice))
    
    //setTestResponse(`${{choice} === questions.data[counterQuest].answer}`)
    if (choice === questions.data[counterQuest].answer) {
      setTestResponse(true);
      updateScore()
      //toastify succuss
      toast.success('True Answer', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }else{
      setTestResponse(false)
      toast.warn('false Answer', {
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

    //console.log(choiceAnswer)
    
    setCounterQuest(counterQuest + 1);
    //test if i click on the button response
    setResponseQuest(true);
    //)
  };
  console.log(testResponse);

  //const scoreChange=()=>{
  //const score=testResponse ? ():()

  //}
  const handleClickNextQuestion = () => {
    // e.preventDefault()
    console.log("nextQuestion");
    responseQuest && setCounterQuest(counterQuest + 1);
    //setClickAnswer(false)
  };

  return (
    <div className="container">
      {counterQuest < 10 ? (
        <div className="quiz-container">
          {/* {questions.data.map((item, index) => (*/}
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
              {questions.data[counterQuest].choices.map((choice, index) => (
                <button
                  type="text"
                  className="choice-btn" //{clickAnswer ?("clickAnswer_color  choice-btn"): ("choice-btn")}
                  key={index}
                  onClick={() => handleClick(choice)}
                >
                  {" "}
                  {choice}
                </button>
              ))}
              <Button
                type="submit"
                onClick={handleClickNextQuestion}
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
          {" "}
          {scoreCounter > 5 && <h2>Congradulation</h2>}
          
          <Resume 
          scoreCounter={scoreCounter}
          setScoreCounter={setScoreCounter}
          questions={questions.data}
          setCounterQuest={setCounterQuest}
          />
          
        </div>
      )}
    </div>
  );
};

export default Questions;
