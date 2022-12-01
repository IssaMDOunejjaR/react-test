import { Route, Routes } from 'react-router-dom';
import { Home, Login, Navbar, Posts, ProtectedRoute } from './components';

function App() {
	return (
		<>
			<Navbar />

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route
					path='/posts'
					element={
						<ProtectedRoute redirectPath='/login'>
							<Posts />
						</ProtectedRoute>
					}
				/>

				<Route path='*' element={<div>Not Found</div>} />
			</Routes>
		</>
	);
}

export default App;
