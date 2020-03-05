import React from "react"
import { useSelector } from "react-redux"
import {
	useFirebase,
	isLoaded,
	isEmpty,
	useFirestoreConnect
} from "react-redux-firebase"
import { Redirect } from "react-router-dom"
import { Button } from "@material-ui/core"
// import GoogleButton from 'react-google-button' // optional

const Login = () => {
	const firebase = useFirebase()
	const auth = useSelector(state => state.firebase.auth)

	const admins = useSelector(
		({ firestore: { ordered } }) => ordered.admins && ordered.admins
	)
	const superAdmins = useSelector(
		({ firestore: { ordered } }) => ordered.superAdmins && ordered.superAdmins
	)
	useFirestoreConnect(() => [
		{ collection: "admins" },
		{ collection: "superAdmins" }
	])

	function loginWithGoogle() {
		return firebase.login({ provider: "google", type: "redirect" })
	}
	if (!isLoaded(auth) || !isLoaded(admins) || !isLoaded(superAdmins)) {
		return <span>Loading...</span>
	} else {
		if (isEmpty(auth)) {
			return <Button onClick={loginWithGoogle}>Google Login</Button>
		} else {
			const email = auth.email
			const isAdmin = !!admins && admins.find(admin => admin.email === email)
			const superAdmin =
				!!superAdmins && superAdmins.find(admin => admin.email === email)

			console.log(admins, email, isAdmin)
			if (email === superAdmin.email) return <Redirect to="/clients" />
			if (email === isAdmin.email) {
				return <Redirect to={`/dashboard/${isAdmin.clientId}`} />
			} else {
				return <Redirect to="/noaccess" />
			}
		}
	}
}

export default Login
