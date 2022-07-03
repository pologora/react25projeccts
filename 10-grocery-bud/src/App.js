import { useEffect, useRef, useState } from 'react'
import './App.css'
import Alert from './components/Alert'
import List from './components/List'

const defaultAlert = { show: false, message: '', type: '' }

const getLocalStorage = () => {
  const list = localStorage.getItem('list')
  if (list) {
    return JSON.parse(localStorage.getItem('list'))
  } else return []
}

function App() {
  const [name, setName] = useState('')
  const [list, setList] = useState(getLocalStorage())
  const [isEditing, setIsEditing] = useState(false)
  const [editID, setEditId] = useState(null)
  const [alert, setAlert] = useState(defaultAlert)

  const ref = useRef(null)

  const getItem = (id) => {
    const item = list.filter((item) => item.id === id)[0]
    return item
  }

  const clearAll = () => {
    setList([])
    setName('')
    setAlert({ show: true, message: 'Empty list', type: 'danger' })
  }

  const removeAlert = () => {
    setAlert(defaultAlert)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name) {
      setAlert({ show: true, message: 'Please Enter Value', type: 'danger' })
    } else if (name && isEditing) {
      setList((prev) => {
        return prev.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name }
          }
          return item
        })
      })
      setIsEditing(false)
      setName('')
      setEditId(null)
      setAlert({ show: true, message: 'Item Eddited', type: 'success' })
    } else {
      const newItem = { id: new Date().getTime().toString(), title: name }
      setList((prev) => [...prev, newItem])
      setName('')
      setAlert({ show: true, message: 'Item Added To The List', type: 'success' })
    }
    ref.current.focus()
  }

  const editItem = (id) => {
    const editingItem = getItem(id)
    setIsEditing(true)
    setName(editingItem.title)
    setEditId(id)
    ref.current.focus()
  }

  const deleteItem = (id) => {
    setList((prev) => {
      return prev.filter((item) => item.id !== id)
    })
    setAlert({ show: true, message: 'item deleted', type: 'danger' })
  }

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])

  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {<Alert {...alert} removeAlert={removeAlert} />}
        <h3>grocery bud</h3>
        <div className='form-control'>
          <input
            ref={ref}
            type='text'
            className='grocery'
            placeholder='e.g. eggs'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type='submit' className='submit-btn'>
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className='grocery-container'>
          <List items={list} deleteItem={deleteItem} editItem={editItem} />
          <button className='clear-btn' onClick={clearAll}>
            clear items
          </button>
        </div>
      )}
    </section>
  )
}

export default App
