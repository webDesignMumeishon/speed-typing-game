import React,{useState, useEffect, useRef} from 'react';
import './App.css';

function App() {

  const INITIAL_COUNT = 5

  const [text, setText] = useState<string>("")
  const [countdown, setCountdown] = useState<number>(INITIAL_COUNT)
  const [isTimeRunning, setIsTimeRunning] = useState<boolean>(false)
  const [wordCount, setWordCount] = useState<number>(0)
  const textBoxRef = useRef<HTMLTextAreaElement>(null)

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
      setCountdown(INITIAL_COUNT)
      setWordCount(0)
      setText("")
      
      if(textBoxRef.current){
        textBoxRef.current.disabled = false
        textBoxRef.current.focus()
      }
    }
  }

  const endGame = () => {
    setIsTimeRunning(false)
    const totalWords = calculateWordCount()
    setWordCount(() => totalWords)
  }

  useEffect(() => {
    if(isTimeRunning && countdown > 0){
      setTimeout(() => {
        setCountdown(prevCount => prevCount - 1)
      }, 1000)
    }
    else if(countdown === 0){
      endGame()
    }
  }, [countdown, isTimeRunning])

  return (
    <main>
      <h1>How fast can you type?</h1>
      <textarea 
        ref={textBoxRef}
        value={text} 
        onChange={handleOnChange}
        disabled={!isTimeRunning}
      />
      <h4>Time remaining: {countdown}</h4>
      <button onClick={() => startGame()}>Start Game</button>
      <h1 onClick={() => calculateWordCount()}>Word Count: {wordCount}</h1>
    </main>
  )
}

export default App;
