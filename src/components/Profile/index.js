function Profile() {
  return (
    <section className='popup popup_profile'>
      <div className='popup__container popup__container_profile'>
        <div className='popup__header'>
          <div className='logo logo_popup'></div>
          <h2 className='popup__title popup__title_profile'>Привет, Ирина!</h2>
        </div>
        <div className='popup__body popup__body_profile'>
          <div className='form__row form__row_profile'>
            <label className='form__label form__label_profile' htmlFor='name'>
              Имя
            </label>
            <input
              type='text'
              className='form__input form__input_profile'
              id='name'
              name='student_name'
              defaultValue='Ирина'
              required
            />
          </div>
          <div className='form__row form__row_profile'>
            <label className='form__label form__label_profile' htmlFor='email'>
              Email
            </label>
            <input
              type='text'
              className='form__input form__input_profile'
              id='email'
              name='student_email'
              defaultValue='test@sdfsdfsd.ru'
              required
            />
          </div>
        </div>
        <div className='popup__footer popup__footer_profile'>
          <div className='profile__links'>
            <a href='/' className='profile__link'>
              Редактировать
            </a>
            <a href='/' className='profile__link_red'>
              Выйти из аккаунта
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
