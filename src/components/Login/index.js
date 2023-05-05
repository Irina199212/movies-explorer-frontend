import logo from '../../images/logo.svg';

function Login() {
  return (
    <section className='popup'>
      <div className='popup__container'>
        <div className='popup__header'>
          <div className='logo logo_popup'>
            <a href='/'>
              <img src={logo} alt='лого' />
            </a>
          </div>
          <h2 className='popup__title'>Рады видеть!</h2>
        </div>
        <fieldset className='popup__body'>
          <form
            action=''
            method='post'
            name='registerForm'
            className='form'
            noValidate
          >
            <div className='form__row'>
              <label className='form__label' htmlFor='e-mail'>
                E-mail
              </label>
              <input
                type='email'
                className='form__input'
                id='e-mail'
                name='student_e-mail'
                required
              />
              <span className='form__error'>Что-то пошло не так...</span>
            </div>

            <div className='form__row'>
              <label className='form__label' htmlFor='password'>
                Пароль
              </label>
              <input
                type='password'
                className='form__input form__input_error'
                id='password'
                name='student_password'
                required
                defaultValue='123123123'
              />
              <span className='form__error form__error_active'>
                Что-то пошло не так...
              </span>
            </div>
          </form>
        </fieldset>
        <div className='popup__footer'>
          <button
            type='submit'
            name='registration-button'
            className='form__button'
          >
            Войти
          </button>
          <p className='form__text'>
            Ещё не зарегистрированы?
            <a href='/signup' className='form__link'>
              Регистрация
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Login;
