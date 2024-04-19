
import me from '../images/me.jpg';
import link_logo from '../images/link_logo.svg'

function Student() {
    return (
        <div className='student'>
            <h2 className="student__name">Студент</h2>
            <div className="student__container">
                <div className='student__text'>
                    <h3 className="student__header">Андрей</h3>
                    <h4 className="student__subtitle">Фротненд-разработчик, 21 год</h4>
                    <p className="student__pharagrath">Я родился и живу в Москве. Учусь на 4-ом курсе МГСУ по направлению информационные системы и технологии. Люблю слушать музыку и играю в маленькой группе. Недавно начал кодить. После того как прошел курс по веб-разработке начал работать на стартап проекте и паралельно работаю в отделе разраотки веб-сервиса своего вуза.</p>
                    <a href='https://github.com/hm431' className='student__link'>GitHub</a>
                </div>
                <img alt="Фото студента" src={me} className='student__img'></img>
            </div>
            <div className='student__portfolio'>
                <h3 className='student__portfolio_header'>Портфолио</h3>
                <div className='student__portfolio_element'>
                    <a className='student__portfolio_link' target="_blank" rel="noopener noreferrer" href='https://github.com/hm431/how-to-learn' >Статичный сайт</a>
                    <img alt="Лого ссылки" src={link_logo} className='student__portfolio_logo'></img>
                </div>
                <div className='student__portfolio_element'>
                    <a className='student__portfolio_link' target="_blank" rel="noopener noreferrer" href='https://hm431.github.io/russian-travel/'>Адаптивный сайт</a>
                    <img alt="Лого ссылки" src={link_logo} className='student__portfolio_logo'></img>
                </div>
                <div className='student__portfolio_element'>
                    <a className='student__portfolio_link' target="_blank" rel="noopener noreferrer" href='https://github.com/hm431/react-mesto-api-full-gha'>Одностраничное приложение</a>
                    <img alt="Лого ссылки" src={link_logo} className='student__portfolio_logo'></img>
                </div>
            </div>

        </div>
    )
}

export default Student;