import { useEffect, useState } from 'react';
import { mainApi } from '../../utils/MainApi';
import MoviesCardList from '../MoviesCardList';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm';

function SavedMovies() {
  const [isLoading, setLoading] = useState(false);

  const [renderMovies, setRenderMovies] = useState([]);
  const [filterMovies, setFilterMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [showMoreButton, setShowMoreButton] = useState(false);

  const [initMoviesCount, setInitMoviesCount] = useState(0);
  const [addedMovies, setAddedMovies] = useState(0);

  function checkWidth() {
    const pageWidth = document.documentElement.clientWidth;

    if (pageWidth > 1200) {
      setInitMoviesCount(12);
      setAddedMovies(3);
    } else if (pageWidth > 768) {
      setInitMoviesCount(8);
      setAddedMovies(2);
    } else {
      setInitMoviesCount(5);
      setAddedMovies(1);
    }
  }

  useEffect(() => {
      handleFilter('');
  }, [savedMovies]);

  useEffect(() => {
    checkWidth();
  }, []);

  useEffect(() => {
    if (filterMovies.length <= initMoviesCount) {
      setShowMoreButton(false);
      setRenderMovies(filterMovies);
    } else {
      for (let i = renderMovies.length; i < initMoviesCount; i++) {
        setRenderMovies((prevMovies) => {
          return [...prevMovies, filterMovies[i]];
        });
      }
      setShowMoreButton(true);
    }
  }, [initMoviesCount, filterMovies]);

  function resizeWidth() {
    setTimeout(checkWidth, 5000);
  }

  useEffect(() => {
    window.addEventListener('resize', resizeWidth);

    return () => {
      window.removeEventListener('resize', resizeWidth);
    };
  }, []);

  useEffect(() => {
    setLoading(true);
    const jwt = localStorage.getItem('jwt');
    mainApi
      .getSavesMovies(jwt)
      .then((saveMovies) => {
        for (let i = 0; i < saveMovies.data.length; i++) {
          setFilterMovies((prevMovies) => {
            saveMovies.data[i].id = saveMovies.data[i].movieId;
            return [...prevMovies, saveMovies.data[i]];
          });
        }
        setSavedMovies(saveMovies.data);
        setFilterMovies(saveMovies.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  function handleRemove(movieId) {
    setLoading(true);
    const jwt = localStorage.getItem('jwt');
    mainApi
      .removeMovie(movieId, jwt)
      .then(() => {
        setSavedMovies((prevUsersMovies) => {
          return prevUsersMovies.filter((movie) => movie._id !== movieId);
        });
        setFilterMovies((prevUsersMovies) => {
          return prevUsersMovies.filter((movie) => movie._id !== movieId);
        });
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => setLoading(false));
  }

  function handleShowMoreMovies() {
    setInitMoviesCount(renderMovies.length + addedMovies);
  }

  function handleFilter(filterString, checked = false) {
    const filterData = savedMovies.filter((movie) => {
      let matchedWord = false;

      if (checked && movie.duration > 40) {
        return matchedWord;
      }
      matchedWord = (movie.nameRU + movie.nameEN)
        .toLowerCase()
        .includes(filterString.toLowerCase());
      return matchedWord;
    });
    setFilterMovies(filterData);
  }

  function handleSmallMovies(filterString, checked) {
    handleFilter(filterString, checked);
  }

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <SearchForm
            onSubmit={handleFilter}
            onSmallMovies={handleSmallMovies}
            isSavedMovies={true}
          />
          <MoviesCardList
            movies={renderMovies}
            savedMovies={savedMovies}
            isSavedMovies={true}
            onRemove={handleRemove}
            showMoreButton={showMoreButton}
            showMoreMovies={handleShowMoreMovies}
          />
        </>
      )}
    </>
  );
}

export default SavedMovies;
