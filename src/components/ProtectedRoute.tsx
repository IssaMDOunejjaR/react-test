import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts';

interface Props {
	children: ReactNode;
	redirectPath?: string;
}

const ProtectedRoute = ({ children, redirectPath = '/' }: Props) => {
	const { user } = useAuth();

	if (!user) return <Navigate to={redirectPath} replace />;

	return <>{children}</>;
};

export default ProtectedRoute;
