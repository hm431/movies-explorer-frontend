import logo from '../images/logo.svg';


function Registration() {
  /*  return (
        <div className='registration'>

            
            <form className="login">
            <img src={logo} alt="Логотип Сайта" className="header__navigation_logo" />
                <h1 className="login__header">Добро пожаловать</h1>

                <span className="login__title">Имя</span>
                <input
                    id="name"
                    name="name"
                    required
                    type="name"
                    className="login__input login__email"
                />



                <span className="login__title">E-mail</span>
                <input
                    id="email"
                    name="email"
                    required
                    type="email"
                    className="login__input login__email"
                />

                <span className="authorization__error  authorization__error_url"></span>
                <span className="login__title">Пароль</span>
                <input
                    required
                    id="password"
                    name="password"
                    type="password"
                    className="login__input login__passwprd"
                />
                <span className="authorization__error  authorization__error_url"></span>
                <button type="submit" className="login__sumbit" >Зарегестрироваться</button>
               
            </form>
        </div>
    ) */


    return (
        <form className="login">
            <img alt="Лого сайта" className="login__logo" src={logo}/>
            <h1 className="login__header">Добро пожаловать!</h1>\
            <span className="login__title">Имя</span>
                <input
                    id="name"
                    name="name"
                    required
                    type="name"
                    className="login__input login__email"
                />



                <span className="login__title">E-mail</span>
                <input
                    id="email"
                    name="email"
                    required
                    type="email"
                    className="login__input login__email"
                />

                <span className="authorization__error  authorization__error_url"></span>
                <span className="login__title">Пароль</span>
                <input
                    required
                    id="password"
                    name="password"
                    type="password"
                    className="login__input login__passwprd"
                />
                <span className="authorization__error  authorization__error_url"></span>
            <button type="submit" className="registration__sumbit" >Зарегистрироваться</button>
            <span className="login__subtitle"> Уже зарегистрированы? <span className="login__link">Войти</span></span>
        </form>
    )
}


export default Registration