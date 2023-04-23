import img from '../../images/1.png';

function MoviesCard() {
  return (
    <div className='card'>
      <div className='card__body'>
        <div className='card__info'>
          <h4 className='card__title'>33 слова о дизайне</h4>
          <p className='card__text'>1ч 47м</p>
        </div>
        <div className='card__icon'></div>
      </div>
      <img src={img} className='card__images' alt="" />
    </div>
  );
}

export default MoviesCard;
