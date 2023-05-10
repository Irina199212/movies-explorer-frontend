import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation';
function Header({ loggedIn }) {
  const location = useLocation();

  const headerClassName = loggedIn
    ? 'container container_header container_header_auth'
    : 'container container_header';

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
          <Navigation loggedIn={loggedIn} />
        </div>
      </header>
    );
  }
}

export default Header;
