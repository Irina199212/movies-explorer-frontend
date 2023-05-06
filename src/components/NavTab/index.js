import { Link } from 'react-router-dom';

function NavTab() {
  return (
    <nav className='navigation'>
      <ul className='navigation__menu'>
        <li className='navigation__link'>
          <Link to='/#project' className='navigation__text'>
            О проекте
          </Link>
        </li>
        <li className='navigation__link'>
          <Link to='/#technologies' className='navigation__text'>
            Технологии
          </Link>
        </li>
        <li className='navigation__link'>
          <Link to='/#student' className='navigation__text'>
            Студент
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;
