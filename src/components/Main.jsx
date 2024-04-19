import Search from "./Search";
import Header from "./Header";
import Footer from "./Footer";
import Cards from "./Cards";
import More from "./More";
function Main() {
    return (
        <>
            <Header />
            <main>
                <Search />
                <Cards />
                <More />
            </main>
            <Footer />
        </>
    )
}

export default Main;