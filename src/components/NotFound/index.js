function NotFound() {
  return (
    <section className='popup'>
      <div className='popup__container'>
        <h1 className='popup__title popup__title_404'>404</h1>
        <div className='popup__subtitle'>Страница не найдена</div>
        <div className='popup__footer'>
          <p className='form__text'>
            <a href='/' className='form__link form__link_back'>
              Назад
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
