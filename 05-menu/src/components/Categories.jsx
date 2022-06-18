const Categories = ({ filterItems, categories }) => {
  return (
    <div className='btn-container'>
      {categories.map((item) => {
        return (
          <button className='filter-btn' key={item} onClick={() => filterItems(item)}>
            {item}
          </button>
        )
      })}
    </div>
  )
}
export default Categories
