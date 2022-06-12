import axios from 'axios'
import { useEffect, useState } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const refetch = async (url) => {
    try {
      setLoading(true)
      const { data } = await axios.get(url)
      setData(data)
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    refetch(url)
  }, [url])

  return { data, loading, error, refetch }
}
export default useFetch
