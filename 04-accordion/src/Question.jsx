import { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const Question = ({ question }) => {
  const [show, setShow] = useState(false)
  return (
    <article>
      <h3>{question.title}</h3>
      <button onClick={() => setShow((prev) => !prev)}>{show ? <AiOutlineMinus /> : <AiOutlinePlus />}</button>
      <p>{show && question.info}</p>
    </article>
  )
}

export default Question
