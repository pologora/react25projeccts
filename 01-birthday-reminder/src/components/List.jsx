import { Button, Box } from '@mui/material'
import { useState } from 'react'
import data from '../data/data'
import BirthdayItem from './BirthdayItem'

const List = () => {
  const [birthdays, setBirthdays] = useState(data)

  return (
    <div className='birthdays-list'>
      {<h2 style={{margin:'10px'}}>{birthdays.length} birthdays today</h2>}
      <Box>{birthdays.length ? birthdays.map((item) => <BirthdayItem item={item} key={item.id} />) : null}</Box>
      <Button variant='contained' color='secondary' onClick={() => setBirthdays([])}>
        Clear All
      </Button>
    </div>
  )
}
export default List
