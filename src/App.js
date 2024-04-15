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

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<AboutCoponent />} />
        <Route path='/shop' element={<Shop />} />
      </Routes>

      <Pottery />
      <Ceramic />
      <OnlineStore />
      <StartShopping />
      <News />
      <Footer />
      {/* <AboutCoponent/> */}
      {/* <Shop/> */}
    </div>
  );
}

export default App;
