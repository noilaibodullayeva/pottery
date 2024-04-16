import './App.css';
import Header from './home/header/header';
import Homepage from './home/HomePage/Homepage';
import Pottery from './home/pottery/pottery';
import Ceramic from './home/ceramic/Ceramic';
import OnlineStore from './home/online/OnlineStore';
import StartShopping from './home/Startshopping/StartShopping';
import News from './home/news/News';
import Footer from './home/footer/Footer';
import AboutCoponent from './Components/AboutUs/aboutCoponent';
import Shop from './Components/Shop/Shop';
import { Route, Routes } from 'react-router-dom';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<AboutCoponent />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>

      <Pottery />
      <Ceramic />
      <OnlineStore />
      <StartShopping />
      <News />
      <Footer />
    </div>
  );
}

export default App;
