import { useState, useEffect } from 'react';

export const useForm = () => {
  const [text, setText] = useState('')

  useEffect(() => {
    console.log('useEffect')
  }, [])

  const reset = () => {
    setText('')
  }

  return {
    text,
    setText,
    reset
  }
}
