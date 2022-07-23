import React, { useState, useEffect } from "react";

import { Button } from 'antd';
import Resume from "./Resume"


const Questions = ({ data }) => {
  const [questions, setQuestions] = useState(data);
  const [testResponse, setTestResponse] = useState(false);
  const [counterQuest, setCounterQuest] = useState(0);
  const [scoreCounter, setScoreCounter] = useState(0);
  const [disabledButton, setDisabledButton] = useState(true);
  const [responseQuest, setResponseQuest] = useState(false);
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
    //setTestResponse(`${{choice} === questions.data[counterQuest].answer}`)
    if (choice === questions.data[counterQuest].answer) {
      setTestResponse(true);
      updateScore()
      //toastify succuss
    }else{
      setTestResponse(false)
    }
    //console.log(testResponse);

    //good answer
    /* testResponse
      ? setScoreCounter(scoreCounter + 1)
      : setScoreCounter(scoreCounter);
    console.log(scoreCounter);*/
    /**/
    //testResponse && updateScore();
    
    /**/
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
              {/*<h4>
                Score{" "}
                {
                  //testResponse ? setScoreCounter(scoreCounter + 1) :
                  scoreCounter
                }
              </h4>*/}
            </div>

            <div className="question">
              <h3>{questions.data[counterQuest].quest}</h3>
            </div>
            <div className="choice">
              {questions.data[counterQuest].choices.map((choice, index) => (
                <Button
                  type="text"
                  className="choice-btn" //{clickAnswer ?("clickAnswer_color  choice-btn"): ("choice-btn")}
                  key={index}
                  onClick={() => handleClick(choice)}
                >
                  {" "}
                  {choice}
                </Button>
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
          {/*<div className="header-resume">
          <h1>Resume</h1> <h4>{scoreCounter}</h4>
          </div>
          {questions.data.map((item, index) => (
            <div className="resume-quest">
               <h3>{item.quest}</h3>
               <h4>{item.answer}</h4>
               </div>
          ))}*/}
          <Resume 
          scoreCounter={scoreCounter}
          questions={questions.data}
          />
          
        </div>
      )}
    </div>
  );
};

export default Questions;
