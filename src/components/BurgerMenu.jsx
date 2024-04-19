import burger from '../images/burger__icon.png'
import logo__accaunt from '../images/accaunt__logo.svg'



function BurgerMenu(isOpen, onClose) {
    return (
        <div className={`burger ${isOpen ? 'burger_opened' : 'animation_close'}`}>
            <div class='burger__container'>
                <button type="button" className="burger__close" onClick={onClose} />
                <div className="burger__menu">
                    <div className="burger__menu_top">
                        <div className="burger__menu_text">Главная</div>
                        <div className="burger__menu_text">Фильмы</div>
                        <div className="burger__menu_text">Сохранённые фильмы</div>
                    </div>
                    <div className="burger__menu_bottom">
                        <div className='header__accaunt'>
                            <a className='header__accaunt_text' href='#'>Аккаунт</a>
                            <a className='header__accaunt_logo' href='#'>
                                <img src={logo__accaunt} alt="Логотип Аккаунта" className='header__accaunt_logo_img'></img>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default BurgerMenu;