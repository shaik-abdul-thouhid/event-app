import React from 'react';
import './Header.css';

const Header = props => {

    const { user, logout } = props;
    const userInfo = (user === '') ? '' : user;

    return (
        <header>
            <div className='left-side'>
                <div className='logo'>
                    <h1>Event Application</h1>
                </div>
            </div>
            <div className='right-side'>
                <h3 title={ userInfo }>{ userInfo }</h3>
                <button onClick={ logout }>LogOut</button>
            </div>
        </header>
    );
};

export default Header;