import React from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Button from "@material-ui/core/Button"
import { useSelector } from "react-redux"
import { isLoaded, isEmpty, useFirebase } from "react-redux-firebase"

const NavBar = () => {
	const auth = useSelector(state => state.firebase.auth)
	const firebase = useFirebase()
	if (isLoaded(auth)) {
		return (
			<AppBar position="static">
				<Toolbar>
					{!isEmpty(auth) && (
						<Button color="inherit" onClick={() => firebase.logout()}>
							Logout
						</Button>
					)}
				</Toolbar>
			</AppBar>
		)
	} else {
		return null
	}
}
export default NavBar
