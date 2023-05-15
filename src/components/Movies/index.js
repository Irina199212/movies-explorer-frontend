import { useEffect, useState } from 'react';
import { mainApi } from '../../utils/MainApi';
import { moviesApi } from '../../utils/MoviesApi';
import {
  desktopCards,
  desktopCardsAdded,
  desktopWidth,
  ipadCards,
  ipadCardsAdded,
  ipadWidth,
  mobileCards,
  mobileCardsAdded,
  smallMovieDuration,
} from '../../utils/config';
import MoviesCardList from '../MoviesCardList';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm';

function Movies({ loggedIn }) {
  const [isLoading, setLoading] = useState(false);
  const [allMovies, setAllMovies] = useState([]);
  const [renderMovies, setRenderMovies] = useState([]);
  const [filterMovies, setFilterMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [showMoreButton, setShowMoreButton] = useState(false);

  const [initMoviesCount, setInitMoviesCount] = useState(0);
  const [addedMovies, setAddedMovies] = useState(0);

  function checkWidth() {
    const pageWidth = document.documentElement.clientWidth;

    if (pageWidth > desktopWidth) {
      setInitMoviesCount(desktopCards);
      setAddedMovies(desktopCardsAdded);
    } else if (pageWidth > ipadWidth) {
      setInitMoviesCount(ipadCards);
      setAddedMovies(ipadCardsAdded);
    } else {
      setInitMoviesCount(mobileCards);
      setAddedMovies(mobileCardsAdded);
    }
  }

  useEffect(() => {
    if (
      localStorage.getItem('filterString') ||
      localStorage.getItem('filterSmallMovies')
    ) {
      handleFilter(
        localStorage.getItem('filterString'),
        localStorage.getItem('filterSmallMovies') === 'Y' ? true : false
      );
    } else {
      handleFilter('');
    }
  }, [allMovies]);

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
        setSavedMovies(saveMovies.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const movies = localStorage.getItem('movies');
    if (!movies) {
      setLoading(true);
      moviesApi
        .getListMovies()
        .then((movies) => {
          localStorage.setItem('movies', JSON.stringify(movies));
          setAllMovies(movies);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setAllMovies(JSON.parse(movies));
    }
  }, [loggedIn]);

  function handleSave(movie) {
    setLoading(true);
    const jwt = localStorage.getItem('jwt');
    mainApi
      .addMovie(movie, jwt)
      .then((savedMovie) => {
        setSavedMovies((prevMovies) => {
          return [...prevMovies, savedMovie.data];
        });
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => setLoading(false));
  }

  function handleRemove(movieId) {
    setLoading(true);
    const jwt = localStorage.getItem('jwt');
    mainApi
      .removeMovie(movieId, jwt)
      .then((res) => {
        setSavedMovies((prevUsersMovies) => {
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
    localStorage.setItem('filterString', filterString);
    localStorage.setItem('filterSmallMovies', checked ? 'Y' : 'N');
    const filterData = allMovies.filter((movie) => {
      let matchedWord = false;

      if (checked && movie.duration > smallMovieDuration) {
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
          />
          <MoviesCardList
            movies={renderMovies}
            savedMovies={savedMovies}
            onRemove={handleRemove}
            onSave={handleSave}
            showMoreButton={showMoreButton}
            showMoreMovies={handleShowMoreMovies}
          />
        </>
      )}
    </>
  );
}

export default Movies;
