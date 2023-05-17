import { Link } from 'react-router-dom';
import validator from 'validator/es';
import logo from '../../images/logo.svg';

import { useFormWithValidation } from '../../utils/hooks/useFormWithValidation';
function Register({ isError, message, onSubmit }) {
  const { values, errors, handleChange, isValid } = useFormWithValidation({
    name: {
      validate: checkName,
      message: 'Имя должно быть строкой от 2 до 30 символов',
    },
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
  function checkName(value) {
    return validator.isLength(value, { min: 2, max: 30 });
  }
  function checkPassword(value) {
    return validator.isLength(value, { min: 2, max: 30 });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(values.name, values.email, values.password);
  }

  return (
    <form action='/' method='post' name='registerForm' className='form popup'>
      <div className='popup__container'>
        <div className='popup__header'>
          <div className='logo logo_popup'>
            <Link to='/' className='form__link'>
              <img src={logo} alt='лого' />
            </Link>
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
              className={
                errors['name'] ? 'form__input form__input_error' : 'form__input'
              }
              id='name'
              minLength={2}
              maxLength={30}
              value={values['name'] || ''}
              name='name'
              required
              placeholder='Вашe имя'
              onChange={handleChange}
            />
            <span
              className={
                errors['name']
                  ? 'form__error form__error_active'
                  : 'form__error'
              }
            >
              {errors['name']
                ? errors['name']
                : 'Поле обязательно для заполнения'}
            </span>
          </div>

          <div className='form__row'>
            <label className='form__label' htmlFor='e-mail'>
              E-mail
            </label>
            <input
              type='email'
              className={
                errors['email']
                  ? 'form__input form__input_error'
                  : 'form__input'
              }
              id='e-mail'
              value={values['email'] || ''}
              name='email'
              required
              minLength={2}
              maxLength={30}
              placeholder='Ваш email'
              onChange={handleChange}
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
              value={values['password'] || ''}
              className={
                errors['password']
                  ? 'form__input form__input_error'
                  : 'form__input'
              }
              id='password'
              name='password'
              required
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
              Зарегистрироваться
            </button>
          ) : (
            <button
              type='submit'
              name='registration-button'
              className='form__button'
              onClick={handleSubmit}
              disabled
            >
              Зарегистрироваться
            </button>
          )}
          <p className='form__text'>
            Уже зарегистрированы?
            <Link to='/signin' className='form__link'>
              Войти
            </Link>
          </p>
        </div>
      </div>
    </form>
  );
}

export default Register;
