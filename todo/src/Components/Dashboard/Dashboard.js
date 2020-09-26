import React, {useState} from "react";
import Card from '../Card/Card'

import '../Dashboard/Dashboard.css'
import '../Card/Card.css'



/*
function newCard() {
  return (
    <div className="description">
        <input type="text" placeholder="untitled card name"></input>
        <textarea rows="4" cols="50" name="comment" placeholder="description"></textarea>
      </div>
  ) 
}

const Form = () => {
  const [inputList, setInputList] = useState([]);

  const onAddBtnClick = event => {
    setInputList(inputList.concat(<Input key={inputList.length} />));
  };


/*function click() {
  document.getElementById("cardclick").addEventListener("click", () => {
    console.log("hello");
    newCard();
  });
}

window.addEventListener("load", click);
*/
  
function Dashboard() {
  const step = 1
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + step )
  }
    let createdBoxes = []
    for(let i=0; i<count; i++ )
    createdBoxes.push(<Card />)
  return (
    <div className="dashboard">
      <div className="header">
        <input className='inputDashboard' type="text" placeholder="untitled dashboard name"></input>
        <button onClick={increment} className='newButton'>New Card</button>
      </div>
      <div className="cards">
      {createdBoxes}
      </div>
    </div>
  )
}

export default Dashboard
