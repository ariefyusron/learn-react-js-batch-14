import { useState } from 'react'

import Container from "./Container";

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

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <>
      {list.map((item, index) => (
        <Container key={index} title={item.title} desc={item.desc} />
      ))}

      <h1>Count: {count}</h1>
      <button onClick={handleClick}>Klik</button>
    </>
  )
}

export default App;