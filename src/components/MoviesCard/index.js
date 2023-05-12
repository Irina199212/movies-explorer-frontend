import { Link } from 'react-router-dom';

function MoviesCard({ card, savedMovies, onSave, onRemove }) {
  let m = card.duration % 60;
  let h = (card.duration - m) / 60;
  let duration = '';

  if (h > 0) {
    duration += h.toString() + 'ч';
  }

  if (m > 0) {
    duration += ' ' + m.toString() + 'м';
  }
  let image = card.image;
  if (typeof card.image === 'object') {
    image = `https://api.nomoreparties.co/${card.image.url}`;
  }

  let isSaved = savedMovies.find((movie) => movie.movieId === card.id);

  function handleClick() {
    if (isSaved) {
      card.movieId = isSaved._id;
      onRemove(card.movieId);
    } else {
      let movieData = { ...card };
      movieData.image = image;
      movieData.thumbnail = image;
      movieData.movieId = card.id;
      delete movieData.id;
      delete movieData.created_at;
      delete movieData.updated_at;
      onSave(movieData);
    }
  }

  return (
    <li className='card'>
      <div className='card__body'>
        <div className='card__info'>
          <h4 className='card__title'>{card.nameEN}</h4>
          <p className='card__text'>{duration}</p>
        </div>
        <button
          onClick={handleClick}
          className={isSaved ? 'card__icon card__icon_favorites' : 'card__icon'}
          aria-label='Кнопка лайка'
        ></button>
      </div>
      <Link to={card.trailerLink} target='_blank' rel='noreferrer'>
        <img src={image} className='card__images' alt={card.nameEN} />
      </Link>
    </li>
  );
}

export default MoviesCard;
