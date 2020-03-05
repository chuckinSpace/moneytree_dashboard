import React from "react"
import { useSelector } from "react-redux"
import { isEmpty, isLoaded } from "react-redux-firebase"
import { Redirect, useHistory } from "react-router-dom"
import RegisterForm from "./RegisterForm"
function SignUp() {
	const history = useHistory()
	const auth = useSelector(state => state.firebase.auth)

	if (isLoaded(auth)) {
		if (!isEmpty(auth)) {
			return <Redirect to="/login" />
		} else {
			return <RegisterForm type="signUp" />
		}
	} else {
		return <div>Loading</div>
	}
}

export default SignUp
