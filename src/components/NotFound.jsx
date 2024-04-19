import { useNavigate } from 'react-router-dom';


function NotFound() {

    let history = useNavigate();
    //TODO починить классы

    return (
        <main>
            <div className="notFound">
                <h1 className="notFound__header">404</h1>
                <h2 className="notFound__subheader">Страница не найдена</h2>
                <button className='notFound__back' onClick={() => history(-1)}>
                    <span className="notFound__back">Назад</span>
                </button>
            </div>
        </main>
    )
}

export default NotFound;