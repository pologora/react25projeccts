import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { FaQuoteRight } from 'react-icons/fa'
import data from './data'
import './App.css'
import { useCallback, useEffect, useState } from 'react'

function App() {
  const [reviews] = useState(data)
  const [current, setCurrent] = useState(0)

  const checkIndex = (index) => {
    if (index > data.length - 1) {
      return 0
    }
    if (index < 0) {
      return data.length - 1
    }
    return index
  }

  const handlePrev = () => {
    setCurrent((prev) => {
      const newIndex = prev - 1
      return checkIndex(newIndex)
    })
  }

  const handleNext = useCallback(() => {
    setCurrent((prev) => {
      const newIndex = prev + 1
      return checkIndex(newIndex)
    })
  }, [])

  useEffect(() => {
    const nextSliderInterval = setInterval(handleNext, 3000)
    return () => clearInterval(nextSliderInterval)
  }, [handleNext, current])

  return (
    <section className='section'>
      <div className='title'>
        <h2>
          <span>/</span>Reviews
        </h2>
      </div>
      <div className='section-center'>
        {reviews.map((review, index) => {
          const { id, image, name, title, quote } = review
          let position = 'nextSlide'
          if (index === current) {
            position = 'activeSlide'
          }
          if (current === index - 1 || (index === 0 && current === reviews.length - 1)) {
            position = 'lastSlide'
          }
          return (
            <article className={position} key={id}>
              {<img src={image} className='person-img' alt={title}></img>}
              <h4> {name}</h4>
              <p className='title'>{title}</p>
              <p>{quote}</p>
              <FaQuoteRight className='icon' />
            </article>
          )
        })}
        <button className='prev' onClick={handlePrev}>
          <FiChevronLeft />
        </button>
        <button className='next' onClick={handleNext}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  )
}

export default App
