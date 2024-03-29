import logo from './logo.svg';
import './App.css';
import Header from './home/header/header';
import Homepage from './home/HomePage/Homepage';
import Pottery from './home/pottery/pottery';

function App() {
  return (
    <div className="App">
      <Header/>
      <Homepage/>
      <Pottery/>
    </div>
  );
}

export default App;
