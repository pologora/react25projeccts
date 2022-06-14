import './App.css'
import ReviewList from './components/ReviewList'

function App() {
  return (
    <main>
      <section className='container'>
        <div className='title'>
          <h2>our reviews</h2>
          <div className='underline'></div>
        </div>
        <ReviewList />
      </section>
    </main>
  )
}

export default App
