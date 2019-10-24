import React from 'react';
import './App.css';
import DisplayTasks from "./components/Pages/DisplayTasks"
function App() {
  return (
    <div className="App">
       <h3 style={{textAlign:"center"}}>Task details:</h3>
      <DisplayTasks />
    </div>
  );
}

export default App;
