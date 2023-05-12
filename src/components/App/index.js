import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import { CurrentUserContext } from '../Context/CurrentUserContext';
import ProtectedRouteElement from '../ProtectedRoute/ProtectedRoute';

import Footer from '../Footer';
import Header from '../Header';
import Login from '../Login';
import Main from '../Main';
import Movies from '../Movies';
import NotFound from '../NotFound';
import Preloader from '../Preloader/Preloader';
import Profile from '../Profile';
import Register from '../Register';
import SavedMovies from '../SavedMovies';

import { mainApi } from '../../utils/MainApi';

function App() {
  const { pathname, hash, key } = useLocation();
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [message, setMessage] = useState(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (hash === '') {
      window.scrollTo(0, 0);
    } else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [pathname, hash, key]);

  const navigate = useNavigate();

  useEffect(() => {
    checkToken();
  }, []);

  function checkToken() {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      setLoading(true);
      mainApi
        .getTokenContent(jwt)
        .then((tokenData) => {
          if (tokenData) {
            setLoggedIn(true);
            setCurrentUser(tokenData.data);

            if (pathname === '/signin' || pathname === '/signup') {
              navigate('/movies', { replace: true });
            }
          }
        })
        .catch((err) => {
          navigate('/', { replace: true });
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }

  function handleAuthSubmit(email, password) {
    mainApi
      .signin(email, password)
      .then((response) => {
        if (response.jwt) {
          localStorage.setItem('jwt', response.jwt);
          checkToken();
          navigate('/movies', { replace: true });
        }
      })
      .catch((err) => {
        setIsError(true);
        setMessage(err);
      });
  }

  function handleRegisterSubmit(name, email, password) {
    setLoading(true);
    mainApi
      .signup(email, name, password)
      .then((res) => {
        mainApi
          .signin(email, password)
          .then((response) => {
            if (response.jwt) {
              localStorage.setItem('jwt', response.jwt);
              setIsError(false);
              setLoggedIn(true);
              setMessage('');
              setLoading(false);
              navigate('/movies', { replace: true });
            }
          })
          .catch((err) => {
            setLoading(false);
            setIsError(true);
            setMessage(err);
          });
      })
      .catch((err) => {
        setLoading(false);
        setIsError(true);
        setMessage(err);
      });
  }

  function signOut() {
    setLoggedIn(false);
    setEmail(null);
    localStorage.removeItem('jwt');
    localStorage.removeItem('filterString');
    localStorage.removeItem('filterSmallMovies');
    navigate('/', { replace: true });
  }

  function handleUpdateUser(name, email) {
    setLoading(true);
    const jwt = localStorage.getItem('jwt');
    mainApi
      .updateUserInfo({ name: name, email: email }, jwt)
      .then((info) => {
        setCurrentUser(info.data);
        setIsError(true);
        setMessage("Данные изменены");
      })
      .catch((err) => {
        setIsError(true);
        setMessage(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header email={email} loggedIn={loggedIn} />
      <main className='main'>
        {isLoading ? (
          <Preloader />
        ) : (
          <Routes>
            <Route path='/' element={<Main />} />
            <Route
              path='/movies'
              element={
                <ProtectedRouteElement
                  element={Movies}
                  user={currentUser}
                  loggedIn={loggedIn}
                  setLoading={setLoading}
                />
              }
            />
            <Route
              path='/saved-movies'
              element={
                <ProtectedRouteElement
                  element={SavedMovies}
                  loggedIn={loggedIn}
                />
              }
            />
            <Route
              path='/profile'
              element={
                <ProtectedRouteElement
                  element={Profile}
                  isError={isError}
                  message={message}
                  user={currentUser}
                  loggedIn={loggedIn}
                  onSubmit={handleUpdateUser}
                  signOut={signOut}
                />
              }
            />
            <Route
              path='/signup'
              element={
                <Register
                  isError={isError}
                  message={message}
                  loggedIn={loggedIn}
                  onSubmit={handleRegisterSubmit}
                />
              }
            />
            <Route
              path='/signin'
              element={
                <Login
                  isError={isError}
                  message={message}
                  loggedIn={loggedIn}
                  onSubmit={handleAuthSubmit}
                />
              }
            />
            <Route path='*' element={<NotFound />} />
          </Routes>
        )}
      </main>
      <Footer />
    </CurrentUserContext.Provider>
  );
}

export default App;
