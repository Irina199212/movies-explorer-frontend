function Profile() {
  return (
    <form
      className='form popup popup_profile'
      action='/'
      method='post'
      name='profile'
    >
      <div className='popup__container popup__container_profile'>
        <div className='popup__header'>
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
              placeholder='Имя'
              defaultValue='Ирина'
              required
            />
          </div>
          <div className='form__row form__row_profile'>
            <label className='form__label form__label_profile' htmlFor='email'>
              Email
            </label>
            <input
              type='email'
              className='form__input form__input_profile'
              id='email'
              placeholder='Email'
              name='student_email'
              defaultValue='test@sdfsdfsd.ru'
              required
            />
          </div>
        </div>
        <div className='profile popup__footer popup__footer_profile'>
          <div className='profile__links'>
            <button type='submit' className='profile__link'>
              Редактировать
            </button>
            <button type='button' className='profile__link profile__link_red'>
              Выйти из аккаунта
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Profile;
