import Header from './components/Pages/Header'
import "./App.css"
import Hero from './components/Pages/Hero'
import About from './components/Pages/About'
import Footer from './components/Pages/Footer'
import Experience from './components/Pages/Experience'
import Skills from './components/Pages/Skills'
import Education from './components/Pages/Education'
import ContactUs from './components/Pages/Contact'


function App() {

  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Education />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default App
