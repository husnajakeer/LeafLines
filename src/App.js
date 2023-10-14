import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar';
import CountrySelector from './components/selector/selector';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <CountrySelector/>
    </div>
  );
}

export default App;
