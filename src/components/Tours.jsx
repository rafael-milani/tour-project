import Tour from './Tour'

 const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className='title'>
        <h2>Tours</h2>
        <div className='underline'></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} tour={tour} removeTour={removeTour} />
        })}
      </div>
    </section>
  )
}

export default Tours