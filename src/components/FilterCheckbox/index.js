function FilterCheckbox({ onClick }) {
  function checked(event) {
    onClick(event.target.checked);
  }

  const isChecked =
    localStorage.getItem('filterSmallMovies') === 'Y' ? true : false;

  return (
    <div className='search__checkbox'>
      <label className='checkbox' htmlFor='checkbox'>
        <input
          className='checkbox__input'
          type='checkbox'
          id='checkbox'
          value='Y'
          defaultChecked={isChecked}
          onChange={checked}
        />
        <span className='checkbox__text'>Короткометражки</span>
      </label>
    </div>
  );
}

export default FilterCheckbox;
