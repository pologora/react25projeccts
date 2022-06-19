import { useEffect, useState } from 'react'

import './App.css'
import { FaAngleDoubleRight } from 'react-icons/fa'

const url = 'https://course-api.com/react-tabs-project'

function App() {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)
  const [value, setValue] = useState(0)

  const fetchJobs = async () => {
    setLoading(true)
    try {
      const res = await fetch(url)
      if (res.status === 200) {
        const newJobs = await res.json()
        console.log(newJobs)
        setJobs(newJobs)
      } else {
        throw new Error()
      }
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchJobs()
  }, [])

  if (loading)
    return (
      <section className='section loading'>
        <h1>loading...</h1>
      </section>
    )

  const { company, dates, duties, title } = jobs[value]

  return (
    <section className='section'>
      <div className='title'>
        <h2>experience</h2>
        <div className='underline'></div>
      </div>
      <div className='jobs-center'>
        <div className='btn-container'>
          {jobs.map((job, index) => {
            return (
              <button key={job.id} onClick={() => setValue(index)} className={`job-btn ${index === value && 'active-btn'}`}>
                {job.company}
              </button>
            )
          })}
        </div>
        <article className='job-info'>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className='job-date'>{dates}</p>
          {duties.map((dutie, index) => {
            return (
              <div className='job-description' key={index}>
                <FaAngleDoubleRight className='job-icon' />
                <p>{dutie}</p>
              </div>
            )
          })}
        </article>
      </div>
    </section>
  )
}

export default App
