import React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"
import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/analytics"
import { createStore, combineReducers, applyMiddleware } from "redux"
import {
	ReactReduxFirebaseProvider,
	firebaseReducer
} from "react-redux-firebase"
import { createFirestoreInstance, firestoreReducer } from "redux-firestore"
import firebaseConfig from "./firebase/firebaseconfig"
import logger from "redux-logger"
import App from "./App"
// react-redux-firebase config
const rrfConfig = {
	userProfile: "users",
	useFirestoreForProfile: true
}
console.log(firebaseConfig)
// Initialize firebase instance
firebase.initializeApp(firebaseConfig)
// Initialize other services on firebase instance
firebase.firestore()
firebase.analytics()

// Add firebase to reducers
const rootReducer = combineReducers({
	firebase: firebaseReducer,
	firestore: firestoreReducer
})

// Create store with reducers and initial state
const initialState = {}
const store = createStore(rootReducer, initialState, applyMiddleware(logger))

const rrfProps = {
	firebase,
	config: rrfConfig,
	dispatch: store.dispatch,
	createFirestoreInstance
}

render(
	<Provider store={store}>
		<ReactReduxFirebaseProvider {...rrfProps}>
			<App />
		</ReactReduxFirebaseProvider>
	</Provider>,
	document.getElementById("root")
)
