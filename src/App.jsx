import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Products from './components/Products/Products'
import About from './components/About/About'
import Applications from './components/Applications/Applications'
import Logistics from './components/Logistics/Logistics'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Products />
        <About />
        <Applications />
        <Logistics />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
