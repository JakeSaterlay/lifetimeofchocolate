import logo from './images/logo.png';
import './App.css';
import AboutMe from './components/about-me';
import Products from './components/products';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="logo" alt="logo" />
        <h1 className="title">
          Lifetime Of Chocolate
        </h1>
      </header>
      <AboutMe />
      <Products />
    </div>
  );
}

export default App;
