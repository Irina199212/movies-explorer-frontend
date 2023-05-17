import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
function Burger() {
  const { pathname } = useLocation();
  const [show, setShowMenu] = useState(false);
  const showMenu = () => {
    setShowMenu(!show);
  };

  return (
    <>
      <button
        className={
          show ? 'burger-button burger-button_active' : 'burger-button'
        }
        onClick={showMenu}
        aria-label='Кнопка меню'
      ></button>
      <div className='burger'>
        <div
          className={show ? 'burger__menu burger__menu_active' : 'burger__menu'}
        >
          <div className='burger__container'>
            <nav>
              <ul className='burger__nav'>
                <li>
                  <Link
                    to='/'
                    className={
                      pathname === '/'
                        ? 'burger__link burger__link_active'
                        : 'burger__link'
                    }
                  >
                    Главная
                  </Link>
                </li>
                <li>
                  <Link
                    to='/movies'
                    className={
                      pathname === '/movies'
                        ? 'burger__link burger__link_active'
                        : 'burger__link'
                    }
                  >
                    Фильмы
                  </Link>
                </li>
                <li>
                  <Link
                    to='/saved-movies'
                    className={
                      pathname === '/saved-movies'
                        ? 'burger__link burger__link_active'
                        : 'burger__link'
                    }
                  >
                    Сохранённые фильмы
                  </Link>
                </li>
              </ul>
            </nav>
            <div className='burger__account'>
              <Link to='/profile' className='link link_account'>
                Аккаунт
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Burger;
