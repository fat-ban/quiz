import React from "react"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import './App.css';

import data from './data/data.json'
import Home from "./pages/Home";






function App() {
  //console.log(data);
  //const [lastQuest, setLastQuest] = useState(10)
 
  return (
    <Router>
    {/*<div className="App">
      <Home data={data}/>
  </div>*/}
    <Routes>
      <Route exact path={'/'} element={<Home data={data}/>}/>
      <Route path={'/home'} element={<Home data={data}/>}/>
    </Routes>
    </Router>
  );
}

export default App;
