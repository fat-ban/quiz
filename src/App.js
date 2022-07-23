import React from "react"
import './App.css';
import Questions from './components/Questions';
import data from './data/data.json'

import { Typography } from 'antd';

const { Title } = Typography;


function App() {
  //console.log(data);
  //const [lastQuest, setLastQuest] = useState(10)
 
  return (
    <div className="App">
      <Typography>
      <Title  type="secondary" style={{fontSize:"35px"}}>Quiz ReactJs</Title>
      </Typography>
      
      <Questions data={data}/>
      
    </div>
  );
}

export default App;
