import { useEffect, useState } from 'react'
import './App.css'
import Loading from './components/Loading'
import ToursList from './components/ToursList'
import useFetch from './hooks/useFetch'

const url = 'https://course-api.com/react-tours-project'

function App() {
  const { data, loading, refetch } = useFetch(url)
  const [tours, setTours] = useState([])

  const deleteTour = (id) => {
    setTours((prev) => {
      return prev.filter((tour) => tour.id !== id)
    })
  }

  useEffect(() => {
    setTours(data)
  }, [data])

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>{' '}
          <button className='btn' onClick={() => refetch(url)}>
            refresh
          </button>
        </div>
      </main>
    )
  }
  return (
    <main>
      <ToursList tours={tours} deleteTour={deleteTour} />
    </main>
  )
}

export default App
