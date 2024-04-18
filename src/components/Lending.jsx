import Header from './Header';
import Hero from './Hero';
import About from './About';
import Tech from './Tech';
import Student from './Student';
import Footer from './Footer';


function Lending(){
    return(
        <>
      <Header isLanding={"true"}/>
      <Hero />
      <About />
      <Tech/>
      <Student/>
      <Footer/>
        </>
    )
}


export default Lending;