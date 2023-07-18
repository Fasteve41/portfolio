import logo from './logo.svg';
import './App.css';
import Navbar from './Components/navbar'
import Banner from './Components/Banner';
import Skills from './Components/skills';
import Projects from './Components/projects';
import Contact from './Components/Contact'

 
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div> 
  )
}
export default App;
