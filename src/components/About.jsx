

function About() {
    return (
        <div className="about">
            <h2 className="about__header">О проекте</h2>
            <div className="about__text">
                <div className="about__element">
                    <h3 className="about__element_header">Дипломный проект включал 5 этапов</h3>
                    <p className="about__element_pharagrath">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>

                <div className="about__element">
                    <h3 className="about__element_header">На выполнение диплома ушло 5 недель</h3>
                    <p className="about__element_pharagrath">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>

            <div className="about__time">
                <div className="about__time_backend">
                    <div className="about__time_passed">1 неделя</div>
                    <div className="about__time_signature">Back-end</div>
                </div>

                <div className="about__time_frontend">
                    <div className="about__time_remained">4 недели</div>
                    <div className="about__time_signature">Front-end</div>
                </div>
            </div>
        </div>
    )
}

export default About;