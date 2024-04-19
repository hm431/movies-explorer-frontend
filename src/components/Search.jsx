import searchIcon from '../images/search_icon.svg'


/*  <label class="search__switch">
                <input type="checkbox" checked/>
                    <span class="search__slider round"></span>
            </label> */


function Search() {
    return (

        <>
            {(window.innerWidth >= 662) ? (
                <div className="saerch">
                    <div className='search__element'>
                        <img alt="Лого поиска" src={searchIcon} className='search__icon'></img>
                        <form className='search__form'>
                            <input
                                id="search"
                                name="search"
                                type="serch"
                                placeholder="Фильм"
                                className="search__input"
                            />

                        </form>
                    </div>
                    <div className='search__element'>
                        <button className='search__button'>Найти</button>
                        <label class="switch">
                            <input type="checkbox" class="switch__input" />
                            <span class="switch__slider"></span>
                        </label>

                        <div className='search__short'>Короткометражки</div>
                    </div>
                </div>
            ) : (<>

                <div className="saerch">
                    <div className='search__element'>
                        <form className='search__form'>
                            <input
                                id="search"
                                name="search"
                                type="serch"
                                placeholder="Фильм"
                                className="search__input"
                            />

                        </form>
                    </div>
                    <div className='search__element'>
                        <button className='search__button'>Найти</button>
                    </div>
                </div>

                <div className='search__shortButton'>
                    <label class="switch">
                        <input type="checkbox" class="switch__input" />
                        <span class="switch__slider"></span>
                    </label>

                    <div className='search__short'>Короткометражки</div>
                </div>
            </>)}
        </>
    )
}


export default Search;