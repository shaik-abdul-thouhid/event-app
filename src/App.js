import React, { useState } from 'react';
import app from './FirebaseConfig';
import Login from './components/Login';
import './App.css';
import {
	getAuth,
	onAuthStateChanged,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut
} from 'firebase/auth';
import Header from './components/Header';
import Home from './components/Home';

const auth = getAuth(app);

function App() {

	const [loginEmail, setLoginEmail] = useState('');
	const [loginPassword, setLoginPassword] = useState('');
	const [registerEmail, setRegisterEmail] = useState('');
	const [registerPassword, setRegisterPassword] = useState('');
	const [loginError, setLoginError] = useState('')
	const [registerError, setRegisterError] = useState('')
	const [user, setUser] = useState();

	onAuthStateChanged(auth, currentUser => {
		if (currentUser) {
			return setUser(currentUser.email)
		}
		else return setUser('');
	});

	const register = async () => {
		try {
			const user = await createUserWithEmailAndPassword(
				auth,
				registerEmail,
				registerPassword
			);
			setRegisterEmail('');
			setRegisterPassword('');
			setLoginError('');
			setRegisterError('');
		}
		catch (error) {
			setRegisterError(error.message);
		}
	};

	const login = async () => {
		try {
			const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
			setLoginEmail('');
			setLoginPassword('');
			setLoginError('');
			setRegisterError('');
		}
		catch(error) {
			setLoginError(error.message);
		}
	};

	const logout = async () => {
		await signOut(auth);
	};

	return (
		<>
			<Header user={ user } logout={ logout }/>
			<div className='main-container'>
			{
				(user === '') ?
					<Login
						loginEmail={ loginEmail }
						loginPassword={ loginPassword }
						setLoginEmail={ setLoginEmail }
						setLoginPassword={ setLoginPassword }
						registerEmail={ registerEmail }
						registerPassword={ registerPassword }
						setRegisterEmail={ setRegisterEmail }
						setRegisterPassword={ setRegisterPassword }
						loginError={ loginError }
						registerError={ registerError }
						register={ register }
						login={ login }
					/>
				:
					<Home firebaseConfig={ app } user={ user } />
			}
			</div>
		</>
	);
};

export default App;
