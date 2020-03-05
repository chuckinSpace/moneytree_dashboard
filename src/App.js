import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Login from "./components/auth/Login"
import SignUp from "./components/auth/SignUp"
import Home from "./components/Home/Home"

function App() {
	return (
		<div className="App">
			<Router>
				<div>
					<nav>
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/login">Login</Link>
							</li>
							<li>
								<Link to="/signUp">SignUp</Link>
							</li>
						</ul>
					</nav>

					<Switch>
						<Route path="/login">
							<Login />
						</Route>
						<Route path="/signUp">
							<SignUp />
						</Route>
						<Route path="/">
							<Home />
						</Route>
					</Switch>
				</div>
			</Router>
		</div>
	)
}

export default App
