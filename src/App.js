import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Login from "./components/auth/Login"
import SignUp from "./components/auth/SignUp"
import Home from "./components/Home/Home"
import { Grid } from "@material-ui/core"
import NavBar from "./components/NavBar/NavBar"
import PrivateRoute from "./components/auth/PrivateRoute"

function App() {
	return (
		<Grid>
			<NavBar />
			<Router>
				<Switch>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/signUp">
						<SignUp />
					</Route>
					<PrivateRoute path="/">
						<Home />
					</PrivateRoute>
				</Switch>
			</Router>
		</Grid>
	)
}

export default App
