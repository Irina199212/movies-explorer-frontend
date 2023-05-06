function FilterCheckbox() {
  return (
    <div className='search__checkbox'>
      <label className='checkbox' htmlFor='checkbox'>
        <input className='checkbox__input' type='checkbox' id='checkbox' />
        <span className='checkbox__text'>Короткометражки</span>
      </label>
    </div>
  );
}

export default FilterCheckbox;
