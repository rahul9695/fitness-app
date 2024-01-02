import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [counter, setCounter] = useState(30);
  const [currentCount, setCurrentCount] = useState(1);
  const [loading, setLoading] = useState("");

  useEffect(() => {
    setLoading("Loading...");
    async function fetchData() {
      try {
        const response = await fetch("https://opentdb.com/api.php?amount=1&type=multiple");
        const data = await response.json();
        // console.log(data.results);
        setLoading("");
        setQuestions(data.results);
      } catch (error) {
        console.log(error);
        console.log("New error");
        alert("Error while fetching the data, Please try reloading.")
      }
    }
    fetchData();
  }, [score, currentCount]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (counter > 0) setCounter((prev) => prev - 1);
    }, 1000);

    // Clear the existing timeout before setting a new one
    return () => clearTimeout(timeoutId);
  }, [counter]);

  if (counter <= 0) {
    alert("Opps. Time Out. Please try to be quick next time.");
    setCurrentCount((prev) => prev += 1);
    setCounter(30);
  }

  function checkAnswer(e) {
    const submission = e.target.value.toLowerCase();
    if (submission === questions[0].correct_answer.toLowerCase() && counter > 0) {
      setScore((prev) => prev + 1);
    }
    setCurrentCount((prev) => prev + 1);
    setCounter(30);
  }

  function skipQuestion() {
    setCounter(30);
    setCurrentCount((prev) => prev += 1);
  }

  return (
    <>
      {currentCount <= 10 ?
        <div className='App'>
          <p>{loading}</p>
          <h1>Quiz App</h1>
          <div className='quizDataContainer'>
            <h2>Question {currentCount}</h2>
            {questions.map((data) => (
              <div key={data.question}>
                <h4>{data.question}</h4>
                <ul>
                  <li><button value={data.correct_answer} onClick={(e) => checkAnswer(e)}>{data.correct_answer}</button></li>
                  {data.incorrect_answers.map((answer) => <li key={answer}><button value={answer} onClick={checkAnswer}>{answer}</button></li>)}
                </ul>
              </div>
            ))}
            <p>Time Left : {Math.round(counter)} seconds</p>
            <button onClick={skipQuestion}>Skip Question</button>
            <p>Your Score: {score}</p>
            <p>Question Left {10 - currentCount}</p>
          </div>
        </div>
        :
        <div className='App'>
          <h1>Quiz Ended</h1>
          <div>Your Score is: {score}</div>
        </div>
      }
    </>
  )
}

export default App;
