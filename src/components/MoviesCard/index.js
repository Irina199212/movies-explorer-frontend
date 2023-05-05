import img from '../../images/1.png';

function MoviesCard(props) {
  return (
    <div className='card'>
      <div className='card__body'>
        <div className='card__info'>
          <h4 className='card__title'>33 слова о дизайне</h4>
          <p className='card__text'>1ч 47м</p>
        </div>
        <button
          className={
            props.saved ? 'card__icon card__icon_favorites' : 'card__icon'
          }
          aria-label='Кнопка лайка'
        ></button>
      </div>
      <img src={img} className='card__images' alt='' />
    </div>
  );
}

export default MoviesCard;
