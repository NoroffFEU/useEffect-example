import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import First from "./components/First";
import Second from "./components/Second";
import "./App.css";

function App() {
	return (
		<Router>
			<div>
				<nav>
					<Link to="/">First</Link> | <Link to="/second">Second</Link>
				</nav>

				<Switch>
					<Route path="/" exact>
						<First />
					</Route>
					<Route path="/second">
						<Second />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
