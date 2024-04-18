import './App.css';
import Header from './home/header/header';
import Homepage from './home/HomePage/Homepage';
import AboutCoponent from './Components/AboutUs/aboutCoponent';
import Shop from './Components/Shop/Shop';
import { Route, Routes } from 'react-router-dom';
import Contact from './Components/Contact/Contact';
import Umumiy from './home/Umumiy';

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
      <Umumiy />

    </div>
  );
}

export default App;
