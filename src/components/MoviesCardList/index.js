import MoviesCard from '../MoviesCard';

function MoviesCardList({
  movies,
  savedMovies,
  onRemove,
  onSave,
  showMoreButton,
  showMoreMovies,
  isSavedMovies = false
}) {
  return (
    <section className='movies'>
      <div className='container'>
        {movies.length > 0 ? (
          <ul className='cards'>
            {movies &&
              movies.map((movie) => (
                <MoviesCard
                  card={movie}
                  isSavedMovies={isSavedMovies}
                  savedMovies={savedMovies}
                  key={movie.id || movie._id}
                  onRemove={onRemove}
                  onSave={onSave}
                />
              ))}
          </ul>
        ) : (
          <div className='movies__error'>Ничего не найдено</div>
        )}
        {showMoreButton && (
          <button className='movies__button' onClick={showMoreMovies}>
            Ещё
          </button>
        )}
      </div>
    </section>
  );
}

export default MoviesCardList;
