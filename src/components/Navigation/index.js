import { Link, Route, Routes } from 'react-router-dom';
import Burger from '../Burger';
function Navigation() {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <nav className='authorization authorization_index'>
            <Link to='/signup' className='link link_signup'>
              Регистрация
            </Link>
            <Link to='/signin' className='link link_signin'>
              Войти
            </Link>
          </nav>
        }
      />
      <Route
        path='/movies'
        element={
          <>
            <nav className='header__navigation'>
              <Link to='/movies' className='header__link header__link_active'>
                Фильмы
              </Link>
              <Link to='/saved-movies' className='header__link'>
                Сохранённые фильмы
              </Link>
            </nav>
            <nav className='authorization'>
              <Link to='/profile' className='link link_account header__account'>
                Аккаунт
              </Link>
            </nav>
            <Burger />
          </>
        }
      />
      <Route
        path='/saved-movies'
        element={
          <>
            <nav className='header__navigation'>
              <Link to='/movies' className='header__link'>
                Фильмы
              </Link>
              <Link
                to='/saved-movies'
                className='header__link header__link_active'
              >
                Сохранённые фильмы
              </Link>
            </nav>
            <nav className='authorization'>
              <Link to='/profile' className='link link_account header__account'>
                Аккаунт
              </Link>
            </nav>
            <Burger />
          </>
        }
      />
      <Route
        path='/profile'
        element={
          <>
            <nav className='header__navigation'>
              <Link to='/movies' className='header__link'>
                Фильмы
              </Link>
              <Link to='/saved-movies' className='header__link'>
                Сохранённые фильмы
              </Link>
            </nav>
            <nav className='authorization'>
              <Link to='/profile' className='link link_account'>
                Аккаунт
              </Link>
            </nav>
            <Burger />
          </>
        }
      />
    </Routes>
  );
}

export default Navigation;
