function Profile() {
  return (
    <div className='profile'>
      <h2 classNameName='profile__title'>Привет, Ирина!</h2>
      <div className='profile__container'>
        <div className='profile__element'>
          <p className='profile__text'>Имя</p>
          <p className='profile__text'>Ирина</p>
        </div>
        <div className='profile__element'>
          <p className='profile__text'>E-mail</p>
          <p className='profile__text'>E-mail</p>
        </div>
      </div>
      <div className='profile__links'>
        <a href='./' className='profile__link'>
          Редактировать
        </a>
        <a href='./' className='profile__link_red'>
          Выйти из аккаунта
        </a>
      </div>
    </div>
  );
}

export default Profile;
