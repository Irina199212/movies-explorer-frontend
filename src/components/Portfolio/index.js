function Portfolio() {
  return (
    <div className='portfolio'>
      <h4 className='portfolio__title'>Портфолио</h4>
      <nav>
        <ul className='portfolio__links'>
          <li>
            <a
              href='https://github.com/Irina199212/how-to-learn'
              target='_blank'
              rel='noreferrer'
              className='portfolio__link'
            >
              Статичный сайт
              <div className='portfolio__arrow'></div>
            </a>
          </li>
          <li>
            <a
              href='https://irina199212.github.io/russian-travel/'
              target='_blank'
              rel='noreferrer'
              className='portfolio__link'
            >
              Адаптивный сайт
              <div className='portfolio__arrow'></div>
            </a>
          </li>
          <li>
            <a
              href='https://github.com/Irina199212/express-mesto-gha'
              className='portfolio__link portfolio__link_last'
              target='_blank'
              rel='noreferrer'
            >
              Одностраничное приложение
              <div className='portfolio__arrow'></div>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Portfolio;
