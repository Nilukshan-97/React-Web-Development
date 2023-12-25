import './App.css';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Partner from './Components/Partners/Partner';
import Rooms from './Components/Rooms/Rooms';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header/>
        <Hero/>
        <Partner/>
        <Rooms/>
        <Contact/>
        <Footer/>
      </div>
      
    </div>
  );
}

export default App;
