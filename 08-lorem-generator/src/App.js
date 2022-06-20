import { useState } from 'react'
import './App.css'
import data from './data'

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (count <= 0) {
      setText(data.slice(0, 1))
      return
    }
    setText(data.slice(0, count))
  }

  return (
    <section className='section-center'>
      <h3>tired of boring lorem?</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>Paragraphs: </label>
        <input type='number' id='amount' name='amount' value={count} onChange={(e) => setCount(+e.target.value)} />
        <button type='submit' className='btn'>
          generate
        </button>
      </form>
      <article className='lorem-text'>
        {text.map((paragraph, index) => {
          return <p key={index}>{paragraph}</p>
        })}
      </article>
    </section>
  )
}

export default App
