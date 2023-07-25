import './styles.css';

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
	const navigate = useNavigate();

	const [ email, setEmail ] = useState("");
	const [ password, setPassword ] = useState("");
	const [ rememberMe, setRememberMe ] = useState(false);
	const [ errorMsg, setErrorMsg ] = useState("");
	
	const sendLoginRequest = async () => {
		try {
			const response = await axios.post("https://random.api/login");
			console.log(response);

			if (response.status === 200){
				navigate('/profile');
			}
		} catch (error) {
			console.log(error);
			setErrorMsg("An error occurred");
		}
	}

	const sendRegisterRequest = async () => {
		try {
			const response = await axios.post("https://random.api/register");
			console.log(response);

			if (response.status === 200){
				navigate('/profile');
			}
		} catch (error) {
			console.log(error);
			setErrorMsg("An error occurred");
		}
	}

	return (
		<div className='login-container'>
			<div className='login-logo-container'>
				<img src={require("../../images/TexAssistLogo.png")} alt='logo' />
				<h1>TexAssist</h1>
			</div>

			<div className='login-info-container'>
				<input
					className='login-info-input'
					type='text'
					placeholder='Email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					/>
				
				<input
					className='login-info-input'
					type='password'
					placeholder='Password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>

				<div className='login-submit-error-container'>{errorMsg}</div>

				<label>
					<input
						type='checkbox'
						value={rememberMe}
						onChange={(e) => setRememberMe(e.target.checked)}
					/>
					Remember Me
				</label>
				
				<div className='login-submit-btns-container'>
					<input
						className='login-submit-btn-login'
						type='button'
						value={"Login"}
						onClick={sendLoginRequest}
					/>

					<input
						className='login-submit-btn-register'
						type='button'
						value={"Register"}
						onClick={sendRegisterRequest}
					/>
				</div>
			</div>
		</div>
	)
}

export default LoginPage;