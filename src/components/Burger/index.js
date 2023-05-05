import { useState } from 'react';
function Burger() {
  const [show, setShowMenu] = useState(false);
  const showMenu = () => {
    setShowMenu(!show);
  };

  return (
    <>
      <button
        className={show ? 'burger burger_active' : 'burger'}
        onClick={showMenu}
        aria-label='Кнопка меню'
      ></button>
      <div
        className={show ? 'burger__menu burger__menu_active' : 'burger__menu'}
      >
        <div className='burger__container'>
          <nav>
            <ul className='burger__nav'>
              <li>
                <a href='/' className='burger__link'>
                  Главная
                </a>
              </li>
              <li>
                <a href='/movies' className='burger__link burger__link_active'>
                  Фильмы
                </a>
              </li>
              <li>
                <a href='/saved-movies' className='burger__link'>
                  Сохранённые фильмы
                </a>
              </li>
            </ul>
          </nav>
          <div className='burger__link_account'>
            <a href='/profile' className='link link_account'>
              Аккаунт
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Burger;
