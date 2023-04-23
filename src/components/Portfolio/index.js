function Portfolio() {
  return (
    <div className='portfolio'>
      <h4 className='portfolio__title'>Портфолио</h4>
      <div className='portfolio__links'>
        <a href='./' className='portfolio__link'>
          Статичный сайт
          <div className='portfolio__arrow'></div>
        </a>
        <a href='./' className='portfolio__link'>
          Адаптивный сайт
          <div className='portfolio__arrow'></div>
        </a>
        <a href='./' className='portfolio__link'>
          Одностраничное приложение
          <div className='portfolio__arrow'></div>
        </a>
      </div>
    </div>
  );
}

export default Portfolio;
