import './App.css';
import NavBar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Project from './Pages/Projects';
import About from './Pages/About';
import Contact from './Pages/Contact';
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
          <Home/>
          <Footer/>
        </Router>
    </div>
  );
}

export default App;
