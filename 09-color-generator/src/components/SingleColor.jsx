import { useState } from 'react'
import rgbToHex from '../utils'

const SingleColor = ({ rgb, weight, index, listLength }) => {
  const [alert, setAlert] = useState(false)

  const bcg = rgb.join(',')
  const hex = rgbToHex(...rgb)

  const copyToClipboard = () => {
    setAlert(true)
    navigator.clipboard.writeText(hex)
    setTimeout(() => {
      setAlert(false)
    }, 2000)
  }

  return (
    <article
      onClick={copyToClipboard}
      className={`color ${index > listLength / 2 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${bcg})`, color: 'white' }}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hex}</p>
      {alert ? <p className='alert'>copied to clipboard</p> : <p className='alert'>click to copy color</p>}
    </article>
  )
}
export default SingleColor
