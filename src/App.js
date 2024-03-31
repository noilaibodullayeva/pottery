import './App.css';
import Header from './home/header/header';
import Homepage from './home/HomePage/Homepage';
import Pottery from './home/pottery/pottery';
import Ceramic from './home/ceramic/Ceramic';
import OnlineStore from './home/online/OnlineStore';
import StartShopping from './home/Startshopping/StartShopping';
import News from './home/news/News';
import Footer from './home/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Homepage />
      <Pottery />
      <Ceramic />
      <OnlineStore />
      <StartShopping />
      <News />
      <Footer/>
    </div>
  );
}

export default App;
