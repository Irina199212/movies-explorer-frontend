function Portfolio() {
  return (
    <div className='portfolio'>
      <h4 className='portfolio__title'>Портфолио</h4>
      <div className='portfolio__links'>
        <a
          href='https://github.com/Irina199212/how-to-learn'
          target='_blank'
          rel='noreferrer'
          className='portfolio__link'
        >
          Статичный сайт
          <div className='portfolio__arrow'></div>
        </a>
        <a
          href='https://irina199212.github.io/russian-travel/'
          target='_blank'
          rel='noreferrer'
          className='portfolio__link'
        >
          Адаптивный сайт
          <div className='portfolio__arrow'></div>
        </a>
        <a
          href='https://github.com/Irina199212/express-mesto-gha'
          className='portfolio__link'
          target='_blank'
          rel='noreferrer'
        >
          Одностраничное приложение
          <div className='portfolio__arrow'></div>
        </a>
      </div>
    </div>
  );
}

export default Portfolio;
