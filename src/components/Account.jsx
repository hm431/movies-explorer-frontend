


function Account() {
    var userName = "Олег";
    var userEmail = "olegus@gmail.com"
    return (
        <div className="account">
            <h1 className="account__header">Привет {userName}!</h1>
            <div className="account__container">
                <div className="account__item account__item_first">
                    <h2 className="account__item_part account__item_name">Имя</h2>
                    <h2 className="account__item_part account__item_value">{userName}</h2>
                </div>

                <div className="account__item">
                    <h2 className="account__item_part account__item_name" >E-mail</h2>
                    <h2 className="account__item_part account__item_value">{userEmail}</h2>
                </div>
            </div>

            <button className="account__edit" >Редактировать</button>
            <button className="account__exit" >Выйти из аккаунта</button>


        </div>
    )
}


export default Account;