import { Link, useLocation } from 'react-router-dom';
import Burger from '../Burger';
function Navigation({ loggedIn }) {
  const { pathname } = useLocation();
  if (loggedIn) {
    return (
      <>
        <nav className='header__navigation'>
          <Link to='/movies' className={pathname==='/movies' ?'header__link header__link_active' : 'header__link'}>
            Фильмы
          </Link>
          <Link to='/saved-movies' className={pathname==='/saved-movies' ?'header__link header__link_active' : 'header__link'}>
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
    );
  } else {
    return (
      <nav className='authorization authorization_index'>
        <Link to='/signup' className='link link_signup'>
          Регистрация
        </Link>
        <Link to='/signin' className='link link_signin'>
          Войти
        </Link>
      </nav>
    );
  }
}

export default Navigation;
