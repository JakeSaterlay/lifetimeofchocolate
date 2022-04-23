import logo from "./images/logo.png";
import "./App.css";
import "./styles/buttons.css";
import AboutMe from "./components/about-me";
import Products from "./components/products";
import Events from "./components/events";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="logo" alt="logo" />
				<h1 className="title">Lifetime Of Chocolate</h1>
				<a className="button" href="https://www.lifetimeofchocolate.com/shop">
					Shop Now
				</a>
			</header>
			<div className="sections">
				<AboutMe />
				<Products />
				<Events />
			</div>
		</div>
	);
}

export default App;
