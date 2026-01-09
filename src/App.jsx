const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header />
      <Content />
      <Total />
    </div>
  )
}

const Header = (props) => {
  return (
      <div>
        <h1>{props.course}</h1>
      </div>
    )
}
const Content = (props) => {
  return (
    <div>
      <p>
        {props.part1} {props.exercises1}
      </p>
      <p>
        {props.part2} {props.exercises2}
      </p>
      <p>
        {props.part3} {props.exercises3}
      </p>
    </div>
    )
  }

const Total = (props) => {
  return (
    <div>
      <p>Total number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </div>
    )
}

export default App
