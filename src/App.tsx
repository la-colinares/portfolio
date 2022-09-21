import './app/scss/style.scss';
import Hero from './app/components/hero'
import Projects from './app/components/projects'
import Skills from './app/components/skills'
import Footer from './app/components/footer'

function App() {

  return (
    <div className="App">
      <Hero/>
      <Projects/>
      <Skills/>
      <Footer/>
    </div>
  )
}

export default App
