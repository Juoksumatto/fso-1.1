import { useState } from 'react'

const StatisticLine = (props) => (
  <p>{props.text} {props.value}</p>
)

const Statistics = (props) => (
  <div>
    <h2>Statistics</h2>
    <StatisticLine text="good" value={props.good}/>
    <StatisticLine text="neutral" value={props.neutral}/>
    <StatisticLine text="bad" value={props.bad}/>
    <StatisticLine text="total" value={props.total}/>
    <StatisticLine text="average" value={props.average}/>
    <StatisticLine text="positive" value={props.positive}/>
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
  const total = good + neutral + bad 
  const average = (good - bad) / total
  const positive = (good / total) * 100 + " %"

  return (
    <div>
    <h1>give feedback</h1>
      <Button onClick={() => setToGood(good + 1)} text="good" />
      <Button onClick={() => setToNeutral(neutral + 1)} text="neutral" />
      <Button onClick={() => setToBad(bad + 1)} text="bad" />
        {total === 0 ? <p>No feedback given</p> :
      <Statistics good={good} neutral={neutral} bad={bad} total={total} average={average} positive={positive}/>}
    </div>
  )
}
export default App