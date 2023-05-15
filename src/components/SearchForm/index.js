import { useEffect, useState } from 'react';
import search from '../../images/inputicon.svg';
import { useFormWithValidation } from '../../utils/hooks/useFormWithValidation';
import FilterCheckbox from '../FilterCheckbox';
function SearchForm({ onSubmit, onSmallMovies, isSavedMovies = false }) {
  const savedMovies = isSavedMovies ? '' : localStorage.getItem('filterString');
  const [isValidForm, setIsValidForm] = useState(false);
  const [isSmallMovies, setIsSmallMovies] = useState(false);
  const { values, errors, handleChange } = useFormWithValidation(
    {
      filter: {
        validate: checkName,
        message: 'Поиск должен быть не пустым',
      },
    },
    {
      filter: savedMovies,
    }
  );
  useEffect(() => {
    let smallMoviesChecked = false;
    if (!isSavedMovies)
      smallMoviesChecked =
        localStorage.getItem('filterSmallMovies') === 'Y' ? true : false;
    setIsSmallMovies(smallMoviesChecked);
  }, []);

  useEffect(() => {
    checkName(savedMovies ? savedMovies : '');
  }, []);

  useEffect(() => {
    checkName(values['filter'] ? values['filter'] : '');
  }, [values['filter']]);

  function checkName(value = '') {
    let valid = false;
    if (value!=='' && value.replace(/^\s\s*/, '').replace(/\s\s*$/, '').length > 0)
      valid = true;
    setIsValidForm(valid);
    return valid;
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(values['filter'], isSmallMovies);
  }

  function handleSmallMovies(checked) {
    onSmallMovies(values['filter'], checked);
    setIsSmallMovies(checked);
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
                    {!isValidForm || values['filter'] === '' ? (
                      <button
                        type='submit'
                        name='search-button'
                        className='search__button'
                        disabled
                      ></button>
                    ) : (
                      <button
                        type='submit'
                        name='search-button'
                        className='search__button'
                      ></button>
                    )}
                  </div>
                </form>
              </div>
            </div>
            <FilterCheckbox
              onClick={handleSmallMovies}
              isSavedMovies={isSavedMovies}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchForm;
