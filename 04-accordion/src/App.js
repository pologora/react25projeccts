import './App.css'
import questions from './data'
import Question from './Question'

function App() {
  const listElements = questions.map((question) => <Question question={question} key={question.id} />)
  return (
    <main>
      <div className='container'>{listElements}</div>
    </main>
  )
}

export default App
