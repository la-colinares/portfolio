import './app/scss/style.scss';
import Hero from './app/components/hero'
import Projects from './app/components/projects'
import Skills from './app/components/skills'

function App() {

  return (
    <div className="App">
      <Hero/>
      <Projects/>
      <Skills/>
    </div>
  )
}

export default App
