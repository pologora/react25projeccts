import { useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'
import data from '../data/data'

const ReviewList = () => {
  const [index, setIndex] = useState(0)
  const { image, name,  job, text } = data[index]

  const checkIndex = (index, array) => {
    if (index > array.length - 1) {
      return 0
    }
    if (index < 0) {
      return array.length - 1
    }
    return index
  }

  const changeReview = (action) => {
    switch (action) {
      case 'prev':
        setIndex((prev) => {
          const newIndex = prev - 1
          return checkIndex(newIndex, data)
        })
        break

      case 'next':
        setIndex((prev) => {
          const newIndex = prev + 1
          return checkIndex(newIndex, data)
        })
        break
      case 'random':
        setIndex(() => {
          let random = Math.floor(Math.random() * data.length)
          if (random === index) {
            random++
          }
          return checkIndex(random, data)
        })
        break
      default:
        break
    }
  }

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
      <button className='prev-btn' onClick={() => changeReview('prev')}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={() => changeReview('next')}>
          <FaChevronRight />
        </button>
        </div>
        <button className='random-btn' onClick={() => changeReview('random')}>
          Surprise me
        </button>
    </article>
  )
}
export default ReviewList
