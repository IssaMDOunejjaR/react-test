import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts';

import '../styles/Login.css';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const { user, setUser } = useAuth();

	const handleSubmit = (e: any) => {
		e.preventDefault();

		if (email && password) {
			localStorage.setItem('login', JSON.stringify({ email, password }));

			setUser({ email });
		}
	};

	if (user) return <Navigate to='/posts' />;

	return (
		<section className='login container'>
			<form onSubmit={handleSubmit} className='login-form'>
				<h1>Login</h1>

				<div className='login-input'>
					<label htmlFor='email'>Email</label>
					<input
						type='text'
						placeholder='email@example.com'
						name='email'
						value={email}
						onChange={(e: any) => setEmail(e.target.value)}
					/>
				</div>

				<div className='login-input'>
					<label htmlFor='password'>Password</label>
					<input
						type='password'
						placeholder='password'
						name='password'
						value={password}
						onChange={(e: any) => setPassword(e.target.value)}
					/>
				</div>

				<button type='submit'>Login</button>
			</form>
		</section>
	);
};

export default Login;
