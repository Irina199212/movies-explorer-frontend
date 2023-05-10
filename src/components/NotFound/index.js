import { Link, useNavigate } from 'react-router-dom';
function NotFound() {
  const navigate = useNavigate();

  function historyBack() {
    navigate(-1);
  }
  return (
    <section className='form popup'>
      <div className='popup__container'>
        <h1 className='popup__title popup__title_404'>404</h1>
        <div className='popup__subtitle'>Страница не найдена</div>
        <div className='popup__footer'>
          <p className='form__text'>
            <Link onClick={historyBack} className='form__link form__link_back'>
              Назад
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
