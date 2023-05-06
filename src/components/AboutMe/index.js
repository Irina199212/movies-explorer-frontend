import photo from '../../images/photo.jpeg';
import Portfolio from '../Portfolio';

function AboutMe() {
  return (
    <section id='student' className='student'>
      <div className='container'>
        <h2 className='main__title'>Студент</h2>
        <div className='student__info'>
          <div className='student__text-info'>
            <h3 className='student__name'>Ирина</h3>
            <p className='student__profession'>
              Фронтенд-разработчик, 30&nbsp;лет
            </p>
            <p className='student__text'>
              Я&nbsp;родилась и&nbsp;живу в&nbsp;городе Рязань, закончила
              медицинский колледж.Я люблю слушать музыку, увлекаюсь спортом.
              Недавно начала программировать. При прохождении курса
              по&nbsp;веб-разработке, начала заниматься фриланс-заказами.
            </p>
            <a
              href='https://github.com/Irina199212'
              target='_blank'
              rel='noreferrer'
              className='student__link'
            >
              Github
            </a>
          </div>
          <div className='student__photo'>
            <img src={photo} alt='мое фото' className='photo' />
          </div>
        </div>
        <Portfolio />
      </div>
    </section>
  );
}

export default AboutMe;
