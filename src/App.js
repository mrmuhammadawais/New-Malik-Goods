import {NavBar} from './components/Navbar/NavBar';
import {Banner} from './components/Header/Banner';
import { Services } from './components/Services/Skills';

import {Projects} from './components/Projects/Projects';
import { Footer } from './components/Footer/Footer';
import "bootstrap/dist/css/bootstrap.min.css";

import './App.css';

function App() {
  return (
    <div className="App">
     <NavBar/>  
      <Banner />
      <Services/>
     <Projects/> 
     <Footer/>    
    </div>
  );
}

export default App;
