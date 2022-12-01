import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts';

import '../styles/Navbar.css';

const Navbar = () => {
	const { user, setUser } = useAuth();

	const { pathname } = useLocation();

	const handleLogout = () => {
		localStorage.removeItem('login');

		setUser(null);
	};

	return (
		<nav className='navbar'>
			<div>
				<div className='navbar-logo'>Logo</div>

				<ul className='navbar-links'>
					<li>
						<Link
							to='/'
							className={`navbar-link ${
								pathname === '/' ? 'active' : null
							}`}
						>
							Home
						</Link>
					</li>
					{user && (
						<li>
							<Link
								to='/posts'
								className={`navbar-link ${
									pathname === '/posts' ? 'active' : null
								}`}
							>
								Posts
							</Link>
						</li>
					)}
					{!user ? (
						<li>
							<Link to='/login' className='navbar-button'>
								Login
							</Link>
						</li>
					) : (
						<li>
							<button
								className='navbar-button'
								onClick={handleLogout}
							>
								Logout
							</button>
						</li>
					)}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
