import { useState, useRef } from 'react'

import Container from "./Container";
import { useForm } from './useForm.js'

const App = () => {
  const list = [
    {
      title: "Hello",
      desc: "World"
    },
    {
      title: "Hello2",
      desc: "World2"
    },
    {
      title: "Hello2",
    }
  ]

  const [count, setCount] = useState(0)
  const formDOM = useRef(null)

  const { text, setText, reset } = useForm()

  const handleClick = () => {
    setCount(count + 1)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("submit")
    console.log(e.target.username.value)
  }

  return (
    <>
      {list.map((item, index) => (
        <Container key={index} title={item.title} desc={item.desc} />
      ))}

      {console.log('render')}

      <h1>Count: {count}</h1>
      <button onClick={handleClick}>Klik</button>

      <form ref={formDOM} style={{ marginTop: 24 }} onSubmit={handleSubmit}>
        <input type="text" name='username' />
        <button type="submit">Submit</button>
      </form>
      <button onClick={() => formDOM.current.reset()}>reset form</button>

      <br />
      <br />
      <br />
      <input type='text' placeholder='text' value={text} onChange={(e) => {
        setText(e.target.value)
      }} />
      <button onClick={reset}>reset</button>

      <p>{text}</p>
    </>
  )
}

export default App;