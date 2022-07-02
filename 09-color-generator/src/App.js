import { useEffect, useState } from 'react'

import './App.css'
import Values from 'values.js'
import SingleColor from './components/SingleColor'

const SHADES_DIVIDER = 10
const defaultColor = '#f15025'
const defaultColors =  new Values(defaultColor).all(SHADES_DIVIDER)

function App() {
  const [color, setColor] = useState(defaultColor)
  const [error, setError] = useState(false)
  const [list, setList] = useState(defaultColors)
  console.log(list)

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      const colors = new Values(color).all(SHADES_DIVIDER)
      setList(colors)
      setError(false)
    } catch (err) {
      console.log(err)
      setError(true)
    }
  }
 
  return (
    <>
      <section className='container'>
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={color}
            id='color'
            onChange={(e) => setColor(e.target.value)}
            placeholder={defaultColor}
            className={`${error && 'error'}`}
          ></input>
          <button className='btn' type='submit'>
            Submit
          </button>
        </form>
      </section>
      <section className='colors'>
        {list.map((color, index) => {
          return <SingleColor key={index} {...color} index={index} listLength={list.length} />
        })}
      </section>
    </>
  )
}

export default App
