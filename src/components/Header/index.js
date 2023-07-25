import './styles.css';

import React from 'react';

import ProfileButton from '../ProfileButton';
import LoginButtons from '../LoginButtons';

const Header = () => {

    const loggedIn = false;

    return (
        <header>
            <div className='header-logo-container'>
				<img className='header-logo-image' src={require("../../images/TexAssistLogo.png")} alt='logo' />
				<h1>TexAssist</h1>
			</div>

            <div>
                {loggedIn ? <ProfileButton /> : <LoginButtons />}
            </div>
        </header>
    );
}

export default Header;