function AboutProject() {
  return (
    <section id="project" className='project'>
      <div className='container'>
        <h2 className='main__title'>О проекте</h2>
        <div className='project__diploma'>
          <div className='project__stages'>
            <h3 className='project__subtitle'>
              Дипломный проект включал 5&nbsp;этапов
            </h3>
            <p className='project__text'>
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и&nbsp;финальные доработки.
            </p>
          </div>
          <div className='project__stages'>
            <h3 className='project__subtitle'>
              На&nbsp;выполнение диплома ушло 5&nbsp;недель
            </h3>
            <p className='project__text'>
              У&nbsp;каждого этапа был мягкий и&nbsp;жёсткий дедлайн, которые
              нужно было соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
        <div className='project__time'>
          <div className='project__back-end'>
            <div className='project__black'>1 неделя</div>
            <div className='project__time-text'>Back-end</div>
          </div>
          <div className='project__front-end'>
            <div className='project__gray'>4 недели</div>
            <div className='project__time-text'>Front-end</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
