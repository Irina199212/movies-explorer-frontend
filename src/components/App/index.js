import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';
import Main from '../Main';

import Login from '../Login';
import Movies from '../Movies';
import NotFound from '../NotFound';
import Profile from '../Profile';
import Register from '../Register';
import SavedMovies from '../SavedMovies';

function App() {
  const { pathname, hash, key } = useLocation();
  useEffect(() => {
    if (hash === '') {
      window.scrollTo(0, 0);
    }
    else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [pathname, hash, key]);
  return (
    <>
      <Header />
      <main className='main'>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/saved-movies' element={<SavedMovies />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/signup' element={<Register />} />
          <Route path='/signin' element={<Login />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
