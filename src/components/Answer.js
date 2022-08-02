import React from "react";

const Answer = ({ questions, counterQuest, changeClass, handleClick }) => {
  return (
    <>
      {questions.data[counterQuest].choices.map((choice, index) => (
        <button
          type="text"
          className={
            changeClass ? "clickAnswer_color   choice-btn" : "choice-btn"
          }
          key={index}
          onClick={() => handleClick(choice)}
        >
          {" "}
          {choice}
        </button>
      ))}
    </>
  );
};

export default Answer;
