import validator from 'validator/es';
import { useFormWithValidation } from '../../utils/hooks/useFormWithValidation';

function Profile({ isError, message, onSubmit, signOut, user }) {
  const { values, errors, handleChange, isValid } = useFormWithValidation(
    {
      email: {
        validate: checkEmail,
        message: 'Введите корректный email',
      },
      name: {
        validate: checkName,
        message: 'Имя должно быть строкой от 2 до 30 символов',
      },
    },
    user,
    false
  );

  function checkEmail(value) {
    return validator.isEmail(value);
  }

  function checkName(value) {
    return validator.isLength(value, { min: 2, max: 30 });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(values.name, values.email);
  }

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
              className={
                errors['name']
                  ? 'form__input form__input_profile form__input_error'
                  : 'form__input form__input_profile'
              }
              id='name'
              name='name'
              minLength={2}
              maxLength={30}
              value={values['name']}
              placeholder='Имя'
              onChange={handleChange}
              required
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
          <div className='form__row form__row_profile'>
            <label className='form__label form__label_profile' htmlFor='email'>
              Email
            </label>
            <input
              type='email'
              className={
                errors['email']
                  ? 'form__input form__input_profile form__input_error'
                  : 'form__input form__input_profile'
              }
              id='email'
              value={values['email'] || ''}
              placeholder='Email'
              name='email'
              onChange={handleChange}
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
        </div>
        <div className='profile popup__footer popup__footer_profile'>
          {isError && <div className='popup__error'>{message}</div>}
          <div className='profile__links'>
            {(isValid && (user.name!==values['name'] || user.email!==values['email'])) ? (
              <button
                type='submit'
                name='registration-button'
                className='profile__link'
                onClick={handleSubmit}
              >
                Редактировать
              </button>
            ) : (
              <button
                type='submit'
                name='registration-button'
                className='profile__link'
                onClick={handleSubmit}
                disabled
              >
                Редактировать
              </button>
            )}
            <button
              type='button'
              onClick={signOut}
              className='profile__link profile__link_red'
            >
              Выйти из аккаунта
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Profile;
