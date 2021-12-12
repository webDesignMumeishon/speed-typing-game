import React,{useState} from 'react';
import './App.css';


function App() {
  const [state, setState] = useState("")

  const handleOnChange = (e : React.ChangeEvent<HTMLTextAreaElement>) => {
    const {value} = e.target
    setState(value)
  }

  console.log(state)

  return (
    <main>
      <h1>How fast can you type?</h1>
      <textarea value={state} onChange={handleOnChange}/>
      <h4>Time remaining: []</h4>
      <button>Start Game</button>
      <h1>Word Count: ??</h1>
    </main>
  )
}

export default App;
