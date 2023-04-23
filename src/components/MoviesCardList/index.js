import MoviesCard from '../MoviesCard';

function MoviesCardList() {
  return (
    <section className='movies'>
      <div className='container'>
        <div className='cards'>
          <MoviesCard/>
          <MoviesCard/>
          <MoviesCard/>
          <MoviesCard/>
          <MoviesCard/>
          <MoviesCard/>
          <MoviesCard/>
          <MoviesCard/>
          <MoviesCard/>
          <MoviesCard/>
          <MoviesCard/>
        </div>
        <button className='moves__button'>Ещё</button>
      </div>
    </section>
  );
}

export default MoviesCardList;
