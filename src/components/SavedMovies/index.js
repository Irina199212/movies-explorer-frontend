import MoviesCardList from '../MoviesCardList';
import SearchForm from '../SearchForm';

function SavedMovies() {
  return (
    <>
      <SearchForm />
      <MoviesCardList saved={true}/>
    </>
  );
}

export default SavedMovies;
