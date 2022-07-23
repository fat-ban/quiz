import React from 'react'

//import {  Table} from 'antd';



const Resume = ({scoreCounter,questions}) => {
console.log(questions)
    
  return (
    <>
        <div className="header-resume">
          <h1>Resume</h1> 
          <h3>{scoreCounter}</h3>
        </div>
          <div className="container-resume">
            
            <div className="questions">
                <div className="header-tab">
                <h3>Questions</h3>
                 <h3>Answer</h3>
                </div>
                 <div className="tab-container">
                 {questions.map((item,index)=>
                 <div className='row-quest-answ'>
                   <h4>

                    {item.quest}</h4>
                    <h4>

                          {item.answer}</h4>

                   
                   </div>

             
                    )}
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
          

    </>
    
  )
}

export default Resume