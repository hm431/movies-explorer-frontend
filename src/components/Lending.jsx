import Header from './Header';
import Hero from './Hero';
import About from './About';
import Tech from './Tech';
import Student from './Student';
import Footer from './Footer';


function Lending() {
  return (
    <>
      <Header isLanding={"true"} />
      <main>
        <Hero />
        <About />
        <Tech />
        <Student />
      </main>
      <Footer />
    </>
  )
}


export default Lending;