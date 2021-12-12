import React,{useState} from 'react';
import './App.css';


function App() {
  const [text, setText] = useState<string>("")

  const handleOnChange = (e : React.ChangeEvent<HTMLTextAreaElement>) => {
    const {value} = e.target
    setText(value)
  }


  return (
    <main>
      <h1>How fast can you type?</h1>
      <textarea value={text} onChange={handleOnChange}/>
      <h4>Time remaining: []</h4>
      <button>Start Game</button>
      <h1>Word Count: ??</h1>
    </main>
  )
}

export default App;
