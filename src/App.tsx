import { count } from 'console';
import React,{useState, useEffect} from 'react';
import './App.css';

/**
 * Challenge:
 * 
 * 1. Create state to hold the current value of the countdown timer.
 *    Display this time in the "Time Remaining" header
 * 
 * 2. Set up an effect that runs every time the `timeRemaining` changes
 *    The effect should wait 1 second, then decrement the `timeRemaining` by 1
 * 
 *    Hint: use `setTimeout` instead of `setInterval`. This will help you avoid
 *    a lot of extra work.
 * 
 *    Warning: there will be a bug in this, but we'll tackle that next
 */



function App() {
  const [text, setText] = useState<string>("")
  const [countdown, setCountdown] = useState<number>(5)


  const handleOnChange = (e : React.ChangeEvent<HTMLTextAreaElement>) => {
    const {value} = e.target
    setText(value)
  }

  const calculateWordCount = () => {
    const total = text.trim().split(' ').filter(word => word !== "").length
    console.log(total)
  }

  useEffect(() => {
    if(countdown > 0){
      setTimeout(() => {
        setCountdown(prevCount => prevCount - 1)
      }, 1000)
    }

 

  }, [countdown])


  return (
    <main>
      <h1>How fast can you type?</h1>
      <textarea value={text} onChange={handleOnChange}/>
      <h4>Time remaining: {countdown}</h4>
      <button>Start Game</button>
      <h1 onClick={() => calculateWordCount()}>Word Count: ??</h1>
    </main>
  )
}

export default App;
