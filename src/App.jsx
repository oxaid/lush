// File: src/App.jsx
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import WhyBuy from './components/WhyBuy'
import Tokenomics from './components/Tokenomics'
import HowToBuy from './components/HowToBuy'
import Faq from './components/Faq'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import ScrollToTopButton  from './components/ScrollToTopButton'
import notebookBg from './assets/notebook.png';

function App() {
  return (
    <div
      className="w-full font-sans overflow-x-hidden"
      style={{
        fontFamily: "'Londrina Solid', cursive",
        backgroundImage: `url(${notebookBg})`,
        backgroundRepeat: 'repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'top left'
      }}
    >
      <Navbar />
      <Hero />
      <div id="about">
        <About />
      </div>
      <div id="why-lush">
        <WhyBuy />
      </div>
      <div id="tokenomics">
        <Tokenomics />
      </div>
      <div id="how-to-buy">
        <HowToBuy />
      </div>
      <Gallery />
      <div id="faq">
        <Faq />
      </div>
      <ScrollToTopButton />
      <Footer />
    </div>
  )
}

export default App
