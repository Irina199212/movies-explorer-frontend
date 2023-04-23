import logo from '../../images/logo.svg';

function Register() {
  return (
    <section className='register'>
      <div className='form'>
        <a href='./' className='logo'>
          <img src={logo} alt='лого' />
        </a>
        <h2 className='form__title'>Добро пожаловать!</h2>
        <form action method='get' className='form__registration'>
          <div className='form__elements'>
            <div className='form__row'>
              <label className='form__label' for='name'>
                Имя
              </label>
              <input
                type='text'
                className='form__input'
                id='name'
                name='student_name'
              />
              <p className='error-text'>Что-то пошло не так...</p>
            </div>

            <div className='form__row'>
              <label className='form__label' for='e-mail'>
                E-mail
              </label>
              <input
                type='e-mail'
                className='form__input'
                id='e-mail'
                name='student_e-mail'
              />
              <p className='error-text'>Что-то пошло не так...</p>
            </div>

            <div className='form__row'>
              <label className='form__label' for='password'>
                Пароль
              </label>
              <input
                type='password'
                className='form__input'
                id='password'
                name='student_password'
              />
              <p className='error-text'>Что-то пошло не так...</p>
            </div>
          </div>
          <button
            type='submit'
            name='registration-button'
            className='form__button'
          >
            Зарегистрироваться
          </button>
          <div className='form__elements-text'>
            <p className='form__text'>Уже зарегистрированы?</p>
            <a href='./entrance.html' className='form__link'>
              Войти
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Register;
