import logo from './images/loc-logo.jpg';
import './App.css';
import AboutMe from './components/about-me';

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
    </div>
  );
}

export default App;
