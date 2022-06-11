import { Avatar } from '@mui/material'

const BirthdayItem = ({ item }) => {
  return (
    <div className='birthday-item'>
      <div className='avatar-container'>
        <Avatar alt={item.name} src={item.image} sx={{ width: 74, height: 74 }} />
      </div>
      <div className='text-container'>
        <h4>{item.name}</h4>
        <span className='age'>{item.age} years</span>
      </div>
    </div>
  )
}
export default BirthdayItem
