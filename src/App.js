import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Resume/Resume'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './App.css'
const App = () => {
  
  return (
    <div id='top' className='app'>
      <Header />
      <main>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  )
}

export default App
