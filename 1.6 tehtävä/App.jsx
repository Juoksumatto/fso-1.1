import { useState } from 'react'

const Display = (props) => (
  <div>

    <h2>Statistics</h2>
    <p>good {props.good}</p>
    <p>neutral {props.neutral}</p>
    <p>bad {props.bad}</p>
  </div>
)
const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = newValue => {
    console.log('Good now', newValue)
    setGood(newValue)
  }
  const setToNeutral = newValue => {
    console.log('Neutral now', newValue)
    setNeutral(newValue)
  }
  const setToBad = newValue => {
    console.log('Bad now', newValue)
    setBad(newValue)
  }

  return (
    <div>
    <h1>give feedback</h1>
      <Button onClick={() => setToGood(good + 1)} text="good" />
      <Button onClick={() => setToNeutral(neutral + 1)} text="neutral" />
      <Button onClick={() => setToBad(bad + 1)} text="bad" />
      <Display good={good} neutral={neutral} bad={bad} />

    </div>
  )
}

export default App