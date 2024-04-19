import logo from '../images/logo.svg'

function Login() {
    return (
        <main>
        <form className="login">
            <img alt="Лого сайта" className="login__logo" src={logo} />
            <h1 className="login__header">Рады видеть!</h1>\
            <label className="login__title">E-mail</label>
            <input
                id="email"
                name="email"
                required
                type="email"
                className="login__input login__email"
            />

            <span className="authorization__error  authorization__error_url"></span>
            <label className="login__title">Пароль</label>
            <input
                required
                id="password"
                name="password"
                type="password"
                className="login__input login__passwprd"
            />
            <span className="authorization__error  authorization__error_url"></span>
            <button type="submit" className="login__sumbit" >Войти</button>
            <span className="login__subtitle"> Ещё не зарегистрированы? <a href='./singup' className="login__link">Регистрация</a></span>
        </form>

        </main>
    )
}
export default Login