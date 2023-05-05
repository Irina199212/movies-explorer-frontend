import search from '../../images/inputicon.svg';
import FilterCheckbox from '../FilterCheckbox';
function SearchForm() {
  return (
    <section className='search'>
      <div className='container'>
        <div className='search__border'>
          <div className='search__block'>
            <div className='search__elements'>
              <div className='search__element'>
                <form action='' method='post' className='search__form'>
                  <div className='search__container'>
                    <img src={search} className='search__icon' alt='поиск' />
                    <input
                      type='text'
                      name='film'
                      placeholder='Фильм'
                      className='search__input'
                    />
                  </div>
                  <div className='search__container-botton'>
                    <button type='submit' className='search__botton'></button>
                  </div>
                </form>
              </div>
            </div>
            <FilterCheckbox />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SearchForm;
