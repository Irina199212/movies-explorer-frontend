import validator from 'validator/es';
import search from '../../images/inputicon.svg';
import FilterCheckbox from '../FilterCheckbox';

import { useFormWithValidation } from '../../utils/hooks/useFormWithValidation';
function SearchForm({ onSubmit, onSmallMovies }) {
  const { values, errors, handleChange, isValid } = useFormWithValidation(
    {
      filter: {
        validate: checkName,
        message: 'Имя должно быть строкой от 2 до 30 символов',
      },
    },
    {
      filter: localStorage.getItem('filterString'),
    },
    localStorage.getItem('filterString') ? true : false
  );

  function checkName(value) {
    return validator.isLength(value, { min: 2 });
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(values['filter']);
  }

  return (
    <div className='search'>
      <div className='container'>
        <div className='search__border'>
          <div className='search__block'>
            <div className='search__elements'>
              <div className='search__element'>
                <form
                  action=''
                  method='post'
                  name='search__form'
                  className='search__form'
                  onSubmit={handleSubmit}
                >
                  <div className='search__container'>
                    <img src={search} className='search__icon' alt='поиск' />
                    <input
                      type='text'
                      name='filter'
                      minLength={2}
                      value={values['filter'] || ''}
                      placeholder='Фильм'
                      onChange={handleChange}
                      required
                      className={
                        errors['filter']
                          ? 'search__input search__input_error'
                          : 'search__input'
                      }
                    />
                  </div>
                  <div className='search__container-button'>
                    {isValid ? (
                      <button
                        type='submit'
                        name='search-button'
                        className='search__button'
                      ></button>
                    ) : (
                      <button
                        type='submit'
                        name='search-button'
                        className='search__button'
                        disabled
                      ></button>
                    )}
                  </div>
                </form>
              </div>
            </div>
            <FilterCheckbox onClick={onSmallMovies} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchForm;
