import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Explore from './components/Explore';
import Experience_cards from './components/Experience_cards';
import Footer from './components/Footer';
import Rooms from './components/Rooms';
import Offers_month from './components/Offers_month';
import Subscribe from './components/Subscribe';
import Moments from './components/Moments';

function App() {
  return (
    <div className="App">
      <Home/>
      <Explore/>
      <Experience_cards/>
      <Rooms/>
      <Offers_month/>
      <Moments/>
      <Subscribe/>
      <Footer/>
    </div>
  );
}

export default App;
