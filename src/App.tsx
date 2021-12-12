import React,{useState, useEffect} from 'react';
import './App.css';


/**
 * Challenge:
 * 
 * When the timer reaches 0, count the number of words the user typed in 
 * and display it in the "Word count" section
 * 
 * After the game ends, make it so the user can click the Start button again
 * to play a second time
 */

function App() {
  const [text, setText] = useState<string>("")
  const [countdown, setCountdown] = useState<number>(5)
  const [isTimeRunning, setIsTimeRunning] = useState<boolean>(false)
  const [wordCount, setWordCount] = useState<number>(0)

  const handleOnChange = (e : React.ChangeEvent<HTMLTextAreaElement>) => {
    const {value} = e.target
    setText(value)
  }

  const calculateWordCount = () : number => {
    const total : number = text.trim().split(' ').filter(word => word !== "").length
    return total
  }

  const startGame = () => {
    setIsTimeRunning(true)
    if(countdown === 0){
      setCountdown(5)
      setWordCount(0)
      setText("")
    }
  }

  useEffect(() => {
    if(isTimeRunning && countdown > 0){
      setTimeout(() => {
        setCountdown(prevCount => prevCount - 1)
      }, 1000)
    }
    else if(countdown === 0){
      setIsTimeRunning(false)
      const totalWords = calculateWordCount()
      setWordCount(() => totalWords)
    }
  }, [countdown, isTimeRunning])

  return (
    <main>
      <h1>How fast can you type?</h1>
      <textarea value={text} onChange={handleOnChange}/>
      <h4>Time remaining: {countdown}</h4>
      <button onClick={() => startGame()}>Start Game</button>
      <h1 onClick={() => calculateWordCount()}>Word Count: {wordCount}</h1>
    </main>
  )
}

export default App;
