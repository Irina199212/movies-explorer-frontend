import logo from '../../images/logo.svg';

function Register() {
  return (
    <form action='/' method='post' name='registerForm' className='form popup'>
      <div className='popup__container'>
        <div className='popup__header'>
          <div className='logo logo_popup'>
            <a href='./'>
              <img src={logo} alt='лого' />
            </a>
          </div>
          <h2 className='popup__title'>Добро пожаловать!</h2>
        </div>
        <fieldset className='popup__body'>
          <div className='form__row'>
            <label className='form__label' htmlFor='name'>
              Имя
            </label>
            <input
              type='text'
              className='form__input'
              id='name'
              name='student_name'
              required
              placeholder='Вашe имя'
            />
            <span className='form__error'>Имя обязательно для заполнения</span>
          </div>

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
              placeholder='Ваш email'
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
        </fieldset>
        <div className='popup__footer'>
          <button
            type='submit'
            name='registration-button'
            className='form__button'
          >
            Зарегистрироваться
          </button>
          <p className='form__text'>
            Уже зарегистрированы?{' '}
            <a href='/signin' className='form__link'>
              Войти
            </a>
          </p>
        </div>
      </div>
    </form>
  );
}

export default Register;
