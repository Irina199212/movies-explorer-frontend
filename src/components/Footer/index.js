import { useLocation } from 'react-router-dom';
function Footer() {
  const location = useLocation();
  if (
    location.pathname !== '/' &&
    location.pathname !== '/movies' &&
    location.pathname !== '/saved-movies'
  ) {
    return <footer className='footer'></footer>;
  } else {
    return (
      <footer className='footer'>
        <div className='container container_footer'>
          <div className='footer__text'>
            Учебный проект Яндекс.Практикум х&nbsp;BeatFilm.
          </div>
          <div className='footer__row'>
            <div className='footer__year'>© {new Date().getFullYear()}</div>
            <nav>
              <ul className='footer__links'>
                <li>
                  <a
                    href='https://practicum.yandex.ru/'
                    className='footer__link'
                    rel='noreferrer'
                    target='_blank'
                  >
                    Яндекс.Практикум
                  </a>
                </li>
                <li>
                  <a
                    href='https://github.com/Irina199212/movies-explorer-frontend'
                    rel='noreferrer'
                    target='_blank'
                    className='footer__link'
                  >
                    Github
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
