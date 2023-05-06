import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation';
function Header() {
  const location = useLocation();

  const headerClassName =
    location.pathname === '/'
      ? 'container container_header'
      : 'container container_header container_header_auth';

  if (
    location.pathname !== '/' &&
    location.pathname !== '/movies' &&
    location.pathname !== '/saved-movies' &&
    location.pathname !== '/profile'
  ) {
    return <header className='header'></header>;
  } else {
    return (
      <header className='header'>
        <div className={headerClassName}>
          <Link to='/' className='logo'>
            <img src={logo} alt='Логотип' />
          </Link>
          <Navigation />
        </div>
      </header>
    );
  }
}

export default Header;
