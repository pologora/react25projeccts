import './App.css'
import questions from './data'
import Question from './Question'

function App() {
  const listElements = questions.map((question) => <Question question={question} key={question.id} />)
  return (
    <main>
      <div className='container'>
        <h3>questions and answers about login</h3>
        <section className='info'>{listElements}</section>
      </div>
    </main>
  )
}

export default App
