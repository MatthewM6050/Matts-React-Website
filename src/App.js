import './App.css';
import NavBar from './Components/Navbar.js';
import Footer from './Components/Footer.js';
import Home from './Pages/Home.js';
import Project from './Pages/Projects.js';
import About from './Pages/About.js';
import Contact from './Pages/Contact.js';
import {BrowserRouter as Router,
        Route,
        Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Router>
          <NavBar/>
          <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path='/projects' exact element={<Project/>} />
            <Route path="/about" exact element={<About/>} />
            <Route path='/contact' exact element={<Contact/>} />
          </Routes>
          <Footer/>
        </Router>
    </div>
  );
}

export default App;
