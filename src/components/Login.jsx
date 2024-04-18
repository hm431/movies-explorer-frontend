import logo from '../images/logo.svg'

function Login() {
    return (
        <form className="login">
            <img alt="Лого сайта" className="login__logo" src={logo} />
            <h1 className="login__header">Рады видеть!</h1>\
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
            <button type="submit" className="login__sumbit" >Войти</button>
            <span className="login__subtitle"> Ещё не зарегистрированы? <span className="login__link">Регистрация</span></span>
        </form>
    )
}
export default Login