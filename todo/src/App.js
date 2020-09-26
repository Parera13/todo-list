import React, {useState} from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import './App.css';


function App() {
  const step = 1
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + step )
  }
    let createdBoxes = []
    for(let i=0; i<count; i++ )
    createdBoxes.push(<Dashboard />)
  return (
    <div className="App">
      <h1>React team's Todo App</h1>
      <Dashboard />
      <div>
        {createdBoxes}
      </div>
      <button onClick={increment} className='dbButton'>+</button>
    </div>
  );
}

export default App;
