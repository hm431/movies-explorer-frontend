import { useNavigate } from 'react-router-dom';


function Account() {

    let history = useNavigate();

    var userName = "Олег";
    var userEmail = "olegus@gmail.com"
    return (
        <main>
            <div className="account">
                <h1 className="account__header">Привет {userName}!</h1>
                <form className="account__container">
                    <div className="account__item account__item_first">
                        <label className="account__item_part account__item_name">Имя</label>
                        <h2 className="account__item_part account__item_value">{userName}</h2>
                    </div>

                    <div className="account__item">
                        <label className="account__item_part account__item_name" >E-mail</label>
                        <h2 className="account__item_part account__item_value">{userEmail}</h2>
                    </div>
                </form>

                <button className="account__edit" >Редактировать</button>
                <button className="account__exit" onClick={() => history('../')} >Выйти из аккаунта</button>


            </div>
        </main>
    )
}


export default Account;