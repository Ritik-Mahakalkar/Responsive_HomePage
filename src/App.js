
import './App.css';
import Footer from './Components/Footer/Footer';
import Nevigation from './Components/Nevigation/Nevigation';
import Rights from './Components/Rights/Rights';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import { Route,  Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Nevigation/>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
      <Rights/>
     
    </div>
  );
}

export default App;
