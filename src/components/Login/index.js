import { Link } from 'react-router-dom';
import validator from 'validator/es';
import logo from '../../images/logo.svg';
import { useFormWithValidation } from '../../utils/hooks/useFormWithValidation';

function Login({isError, message, onSubmit }) {

  const { values, errors, handleChange, isValid } = useFormWithValidation({
    email: {
      validate: isEmail,
      message: 'Введите корректный email',
    },
    password: {
      validate: checkPassword,
      message: 'Пароль должно быть строкой от 2 до 30 символов',
    },
  });

  function isEmail(value) {
    return validator.isEmail(value);
  }

  function checkPassword(value) {
    return validator.isLength(value, { min: 2, max: 30 });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(values.email, values.password);
  }

  return (
    <form className='form popup' action='/' method='post' name='registerForm'>
      <div className='popup__container'>
        <div className='popup__header'>
          <div className='logo logo_popup'>
            <Link to='/' className='form__link'>
              <img src={logo} alt='лого' />
            </Link>
          </div>
          <h2 className='popup__title'>Рады видеть!</h2>
        </div>
        <fieldset className='popup__body'>
          <div className='form__row'>
            <label className='form__label' htmlFor='email'>
              E-mail
            </label>
            <input
              type='email'
              className={
                errors['email']
                  ? 'form__input form__input_error'
                  : 'form__input'
              }
              id='email'
              minLength={2}
              maxLength={30}
              placeholder='Ваш email'
              onChange={handleChange}
              name='email'
              value={values['email'] || ''}
              required
            />
            <span
              className={
                errors['email']
                  ? 'form__error form__error_active'
                  : 'form__error'
              }
            >
              {errors['email']
                ? errors['email']
                : 'Поле обязательно для заполнения'}
            </span>
          </div>

          <div className='form__row'>
            <label className='form__label' htmlFor='password'>
              Пароль
            </label>
            <input
              type='password'
              className={
                errors['password']
                  ? 'form__input form__input_error'
                  : 'form__input'
              }
              id='password'
              name='password'
              required
              value={values['password'] || ''}
              placeholder='Ваш пароль'
              onChange={handleChange}
            />
            <span
              className={
                errors['password']
                  ? 'form__error form__error_active'
                  : 'form__error'
              }
            >
              {errors['password']
                ? errors['password']
                : 'Поле обязательно для заполнения'}
            </span>
          </div>
        </fieldset>
        <div className='popup__footer'>
          {isError && <div className='popup__error'>{message}</div>}
          {isValid ? (
            <button
              type='submit'
              name='registration-button'
              className='form__button'
              onClick={handleSubmit}
            >
              Войти
            </button>
          ) : (
            <button
              type='submit'
              name='registration-button'
              className='form__button'
              onClick={handleSubmit}
              disabled
            >
              Войти
            </button>
          )}
          <p className='form__text'>
            Ещё не зарегистрированы?
            <Link to='/signup' className='form__link'>
              Регистрация
            </Link>
          </p>
        </div>
      </div>
    </form>
  );
}

export default Login;
