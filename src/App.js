import logo from './logo.svg';
import './App.css';
import Navbar from './Components/navbar'
import Banner from './Components/Banner';
import Skills from './Components/skills';
import Projects from './Components/projects';
import Contact from './Components/Contact';
import AOS from 'aos'
import 'aos/dist/aos.css'

 
function App() {
  AOS.init({duration: 1800});
  
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
