import { useEffect } from 'react'

const Alert = ({ message, type, removeAlert }) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      removeAlert()
    }, 2000)
    return () => clearTimeout(timeoutId)
  }, [removeAlert])

  return <p className={`alert alert-${type}`}>{message}</p>
}
export default Alert
