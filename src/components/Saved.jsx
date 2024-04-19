import Search from "./Search";
import Header from "./Header";
import Footer from "./Footer";
import Cards from "./Cards";
import React from 'react';
import BurgerMenu from "./BurgerMenu";

function Saved() {
    const [isBurgerMenuOpen, changeBurgerMenuOpen] = React.useState(false);

    return (
        <>
            <Header />
            <main>
                <Search />
                <Cards />
            </main>
            <Footer />


            <BurgerMenu isOpen={isBurgerMenuOpen} />
        </>
    )
}

export default Saved;