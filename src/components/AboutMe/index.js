import photo from '../../images/5714 (5).jpg';
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
              Я&nbsp;родился и&nbsp;живу в&nbsp;Рязань, закончил факультет
              экономики СГУ. У&nbsp;меня есть жена и&nbsp;дочь. Я&nbsp;люблю
              слушать музыку, а&nbsp;ещё увлекаюсь бегом. Недавно начал кодить.
              С&nbsp;2015 года работал в&nbsp;компании &laquo;СКБ Контур&raquo;.
              После того, как прошёл курс по&nbsp;веб-разработке, начал
              заниматься фриланс-заказами и&nbsp;ушёл с&nbsp;постоянной работы.
            </p>
            <a href='./' className='student__link'>
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
