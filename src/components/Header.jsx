import logo from '../images/logo.svg';
import logo__accaunt from '../images/accaunt__logo.svg'
import React, { useState } from 'react';
import burger from '../images/burger__icon.png';
import BurgerMenu from './BurgerMenu';



//TODO Поменять a тег на button 
function Header({isLanding}) {
 
    const [isLogned, changeisLogned] = React.useState(false);
    const [onLogin, changeOnLogin] = React.useState();    

    return (
        <header  className={isLanding ? 'header header__isLanding' : 'header'}>
            <div className='header__navigation'>
   
                <img src={logo} alt="Логотип Сайта" className="header__navigation_logo" />

                {isLanding ?( <></>)
                 : (

                
                <div className='header__navigation_text'>
                    <a>Фильмы</a>
                    <a>Сохранённые фильмы</a>
                </div>
                 )}
            </div>


          


                {(isLogned) ? (
                (window.innerWidth <= 768)  ? (
                    <div className='header__accaunt'>
                        <img src={burger} alt="Логотип Бургер Меню" className='header__accaunt_burger'/>
                    </div>
                    ) : (
                        <div className='header__accaunt'>
                        <a  className='header__accaunt_text' href='#'>Аккаунт</a>
                    <a className='header__accaunt_logo' href='#'>
                        <img src={logo__accaunt} alt="Логотип Аккаунта" className='header__accaunt_logo_img'></img>
                    </a>
                        </div>
                    )
                ) : 
                (

                    (window.innerWidth <= 768)  ? (
                        <div className='header__accaunt'>
                            <img src={burger} alt="Логотип Бургер Меню" className='header__accaunt_burger'/>
                        </div>
                        ) : (
                    <div className='header__accaunt'>
                    <a  className='header__accaunt_text' href='#'>Регистрация</a>
                <button type="button" onClick={onLogin} className='header__accaunt_button'>
                    Войти
                </button>
                
                    </div>
                        )
                )}
            
            

              
            
        </header>
    )
}


export default Header;