import { Button } from 'antd';

import Desc from './Desc'

const LearnTS = () => {
  const angka: number = 10
  let text: string = '10'

  interface Data {
    name: string
    age: number
  }

  const data: Data[] = [
    {
      name: 'John',
      age: 10
    }
  ]

  const handleClick = (e: string) => {
    console.log(e)
  }
  return (
    <>
      <div>Halo</div>

      <Button onClick={() => handleClick('halo')}>Click</Button>

      <Desc name='halo' />
    </>
  )
};

export default LearnTS;