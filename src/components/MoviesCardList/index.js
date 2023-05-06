import MoviesCard from '../MoviesCard';

function MoviesCardList(props) {
  return (
    <section className='movies'>
      <div className='container'>
        <ul className='cards'>
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
        </ul>
        {!props.saved && <button className='movies__button'>Ещё</button>}
      </div>
    </section>
  );
}

export default MoviesCardList;
