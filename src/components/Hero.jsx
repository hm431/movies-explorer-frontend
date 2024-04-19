import logo from "../images/hero-lending-logo.svg"

function Hero(){
    return(
        <div className="hero">
            <h1 className="hero__text">Учебный проект студента факультета Веб-разработки.</h1>
            <img src={logo} className="hero__img" alt="Фон заголовка"></img>
        </div>
    )
}

export default Hero;