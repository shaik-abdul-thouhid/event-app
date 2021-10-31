import React, { useState } from 'react';
import './Login.css';

const Login = props => {

    const {
        loginEmail,
        loginPassword,
        setLoginEmail,
        setLoginPassword,
        registerEmail,
        registerPassword,
        setRegisterEmail,
        setRegisterPassword,
        loginError,
        registerError,
        register,
        login
    } = props;

    const [formType, setFormType] = useState('login');

    const
        handleLoginEmailChange = e => setLoginEmail(e.target.value),
        handleRegisterEmailChange = e => setRegisterEmail(e.target.value),
        handleLoginPasswordChange = e => setLoginPassword(e.target.value),
        handleRegisterPasswordChange = e => setRegisterPassword(e.target.value);

    return (
        <>
            {
                (formType === 'login')
                ?   <div className='form'>
                        <h1>Login</h1>
                        <input onChange={ handleLoginEmailChange } value={ loginEmail} type='email' placeholder='Login Email' />
                        <input onChange={ handleLoginPasswordChange } value={ loginPassword } type='password' placeholder='Login Password' />
                        <button onClick={ login }>Login</button>
                        <p className='error-message'>{ loginError }</p>
                    </div>

                :   <div className='form'>
                        <h1>Sign Up</h1>
                        <input onChange={ handleRegisterEmailChange } value={ registerEmail } type='email' placeholder='SignUp Email' />
                        <input onChange={ handleRegisterPasswordChange } value={ registerPassword } type='password' placeholder='SignUp Password' />
                        <button onClick={ register }>SignUp</button>
                        <p className='error-message'>{ registerError }</p>
                    </div>
            }
            <p>{ (formType === 'login') ? 'Dont\' have an Account? ': 'Already have an Account? ' }<span className='span-class' onClick={ () => ( (formType === 'login') ? setFormType('signup') : setFormType('login'))  }>{(formType === 'login') ? 'Sign Up' : 'Login'}</span></p>
        </>
    );
};

export default Login;