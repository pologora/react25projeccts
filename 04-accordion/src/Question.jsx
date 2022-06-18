import { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const Question = ({ question }) => {
  const [showInfo, setShowInfo] = useState(false)
  return (
    <article className='question'>
      <header>
        <h4>{question.title}</h4>
        <button className='btn' onClick={() => setShowInfo((prev) => !prev)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p>{question.info}</p>}
    </article>
  )
}

export default Question
