import React from 'react-dom'
/* const Hello = () =>{
  return (
    <div>
      <p>Hello World</p>
    </div>
  )
} */

/* const Hello = (props) =>{
  return (
    <div>
      <p>Hello {props.name}</p>
    </div>
  )
} */
const Hello = (props) =>{
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}
const Footer = () => {
  return (
    <div>
      Greeting app created by <a href="https://github.com/mahfuzshahin">Mahfuz Shahin</a>
    </div>
  )
}
const App = () => {
  const now = new Date()
  const a = 10
  const b = 20
  const name ="Shahin"
  const age = 27
  return (
  <div>
    <p>Hello World, it is {now.toString()}</p>
    <p>{a} plus {b} is { a+b}</p>
    <Hello name="maya" age={26+10} />
    <Hello name={name} age={age} />
    <Footer />
  </div>
)
}

export default App