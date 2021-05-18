//import React from 'react-dom'
import React, {useState} from 'react'
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
/* const Hello = (props) =>{
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
} */
/* const Hello = (props)=>{
  return(
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
} */
/* const Hello = (props) =>{
  const bornYear = ()=>{
    const yearNow = new Date().getFullYear()
    return yearNow - props.age
  }
  return(
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
} */
/* const Hello = (props) =>{
  const {name,age}= props

  const bornYear = ()=> new Date().getFullYear() - age
  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>
        So you were probably born in {bornYear()}
      </p>
    </div>
  )
}
const App = ()=>{
  const name = 'Peter'
  const age = 10
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26+10} />
      <Hello name={name} age={age} />
    </div>
  )
} */
// Page re-rendering
/* const App = (props) =>{
  const {counter} = props
  return (
    <div>{counter}</div>
  )
} */
/* const Display = ({counter}) =>{
  return(
    <div>{counter}</div>
  )
} */
/* const Display = ({counter}) => <div>{counter}</div>

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
) */
/* const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
} */
/* const App = () => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter+1)
  const deccreaseByOne = () => setCounter(counter-1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <Display counter={counter}/>
      
        <Button handleClick={increaseByOne} text='plus'/>
        <Button handleClick={deccreaseByOne} text='minus'/>
        <Button handleClick={setToZero} text='zero'/>

    </div>
    
  )
} */
/* const App = () => {
  const [ left, setLeft] = useState(0)
  const [ right, setRight] = useState(0)
  const [ allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left+1)
  }
  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right+1)
  }
  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>Left</button>
      <button onClick={handleRightClick}>Right</button>
      {right}
      <p>{allClicks.join(' ')}</p>
    </div>
  )
} */
/* const App = () =>{
  const [clicks, setClicks] =useState({left: 0, right: 0})
  const handleLeftClick = () => {
    const newClicks = {
      left: clicks.left+1,
      right: clicks.right
    }
    setClicks(newClicks)
  }
  const handleLeftClick = () => setClicks({...clicks, left: clicks.left+1})
   const handleRightClick = () =>{
    const newClicks = {
      left: clicks.left,
      right: clicks.right+1
    }
    setClicks(newClicks)
  } 
  const handleRightClick = () => setClicks({...clicks, right: clicks.right+1})
  return(
    <div>
      {clicks.left}
      <button onClick={handleLeftClick}>L</button>
      <button onClick={handleRightClick}>R</button>
      {clicks.right}
    </div>
  ) 
}*/
/* const History = (props) =>{
  if(props.allClicks.length === 0){
    return (
      <div>
        the app is used pressing the buttons
      </div>
    )
  }
  return(
    <div>
      Button press history: {props.allClicks.join(' ')}
    </div>
  )
}
const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>{text}</button>
) */
/* const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const handleLeftClick = () =>{
    setAll(allClicks.concat('L'))
    setLeft(left+1)
  }
  const handleRightClick = () =>{
    setAll(allClicks.concat('R'))
    setRight(right+1)
  }
  return(
    <div>
      {left}
      <Button handleClick={handleLeftClick} text='left' />
      <Button handleClick={handleRightClick} text='right' />
      {right}
      <History allClicks={allClicks} />
    </div>
  )
} */
/* const App = () => {
  const [age, setAge] = useState(0)
  const [name, setName] = useState('Mahfuz Shahin')
  if(age>10){
    const [foobar, setFoobar] = useState(null)
  }
  for( let i = 0; i <age; i++){
    const[rightWay, setRightWay]= useState(false)
  }
  const notGood = () =>{
    const [x, setX] = useState(-1000)
  }
  return(
    
  )
} */
/* const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)
const Display = (props)=> <div>{props.value}</div> */
/* const App = () =>{
  const [value, setValue] = useState(10)
 
  const setToValue = (newValue) =>{
    setValue(newValue)
  } 
  
  return (
    <div>
      <Display value={value} />
      <Button handleClick={()=>setToValue(100)} text="THousands" />
      <Button handleClick={()=>setToValue(0)} text="Reset" />
      <Button handleClick={()=>setToValue(value+1)} text="Increment" />
      
    </div>
  )
} */

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const setToGood = (newValue) => () => {
    setGood(newValue)
  }
  const setToNeutral = (newValue) => () =>{
    setNeutral(newValue)
  }
  const setToBad = (newValue) => () =>{
    setBad(newValue)
    setBad(newValue)
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      
      <button onClick={setToGood(good + 1)}>good</button>
      <button onClick={setToNeutral(neutral + 1)}>Neutral</button>
      <button onClick={setToBad(bad + 1)}>Bad</button>
      <h2>Statictic</h2>
      <div>Good {good}</div>
      <div>Neutral {neutral}</div>
      <div>Bad {bad}</div>
      <div>all {good+neutral+bad}</div>
      <div>Average {(good+neutral+bad)/3}</div>
      <div>Average {(good*100)/(good+neutral+bad)}%</div>
    </div>
  )
}
export default App