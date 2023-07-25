import './styles.css';

import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginButtons = () => {
	const navigate = useNavigate();
    
    return (
			<div className='header-submit-btns-container'>
				<input
					className='header-submit-btn-login'
					type='button'
					value={"Login"}
					onClick={async () => navigate('/login')}
				/>
				<input
					className='header-submit-btn-register'
					type='button'
					value={"Register"}
					onClick={async () => navigate('/login')}
				/>
			</div>
    );
}

export default LoginButtons;