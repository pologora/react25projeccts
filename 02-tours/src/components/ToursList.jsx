import Tour from './Tour'

const ToursList = ({ tours, deleteTour }) => {
  return (
    <section>
      <div className='title'>
        <h2>Ours tours</h2>
        <div className='underline'></div>
      </div>
      <div>{tours?.map((tour) => <Tour {...tour} key={tour.id} deleteTour={deleteTour} />)}</div>
    </section>
  )
}
export default ToursList
