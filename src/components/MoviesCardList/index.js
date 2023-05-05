import MoviesCard from '../MoviesCard';

function MoviesCardList(props) {
  return (
    <section className='movies'>
      <div className='container'>
        <div className='cards'>
          <MoviesCard {...props} />
          <MoviesCard {...props} />
          <MoviesCard {...props} />
          <MoviesCard {...props} />
          <MoviesCard {...props} />
          <MoviesCard {...props} />
          <MoviesCard {...props} />
          <MoviesCard {...props} />
          <MoviesCard {...props} />
          <MoviesCard {...props} />
          <MoviesCard {...props} />
        </div>
        {!props.saved && <button className='moves__button'>Ещё</button>}
      </div>
    </section>
  );
}

export default MoviesCardList;
