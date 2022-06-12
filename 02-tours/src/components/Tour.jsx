import { useState } from 'react'

const Tour = ({ id, name, info, image, price, deleteTour }) => {
  const [readMore, setReadMore] = useState(false)

  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore((prev) => !prev)}>{!readMore ? 'Read More' : 'Show less'}</button>
        </p>
        <button className='delete-btn' onClick={() => deleteTour(id)}>
          not interested
        </button>
      </footer>
    </article>
  )
}
export default Tour
