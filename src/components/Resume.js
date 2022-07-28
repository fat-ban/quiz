//import { Divider } from 'antd'
import React from "react";
import {useNavigate} from "react-router-dom"
import "antd/dist/antd.css";
import {  Button} from 'antd/lib';
import {CaretRightOutlined,CheckOutlined,TrophyOutlined  } from '@ant-design/icons'




const Resume = ({  setCounterQuest,setScoreCounter,scoreCounter, questions }) => {
  const navigate = useNavigate()

  console.log(questions);
const handleResetQuiz=(()=>{
  setCounterQuest(0)
  setScoreCounter(0)
  navigate('/home')
})


  return (
    <div className="resume">
     
      <div className="container-resume">
      {scoreCounter > 5 && <><TrophyOutlined style={{fontSize:"50px"}}/><h2>Congratulations</h2></>}
        <div className="header-resume">
          <h1>Score</h1>

          <div className="score">
            <p>
              {scoreCounter} / {questions.length}
            </p>
            
          </div>
          {/*<Button type="primary">Repeat Quiz</Button>*/}
        </div>
        <div className="questions">
          <div className="header-tab">
            <h3>Questions</h3>
            <h3>Answer</h3>
          </div>
         
          <div className="tab-container">
            {questions.map((item, index) => (
              <div className="row-quest-answ">
                <h4><CaretRightOutlined style={{color :"#5ba977" , fontSize:"20px"}}/>{item.quest}</h4>
                <h4><CheckOutlined style={{color :"#5ba977" , fontSize:"20px"}}/>{item.answer}</h4>
              </div>
            ))}
          </div>
        </div>
        {/*<ul className="answer">
            <h3>Answer</h3>
                 {questions.map((item,index)=>
                 <div className='row-answer'>
                  
                   <li>
                    {item.answer}
                   </li>
                   </div>

             
                    )}
                 </ul>*/}
      </div>
      <Button 
      type="primary" 
      style={{"margin":"9px","padding":"9px","fontSize":18,borderRadius:"20px"}}
      size="large"
      onClick={handleResetQuiz}
      block
      >
        Repeat Quiz</Button>
    </div>
  );
};

export default Resume;
