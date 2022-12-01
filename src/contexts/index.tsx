import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

type User = {
	email: string;
};

type Context = {
	user: User | null;
	setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

const AuthContext = createContext<Context>({ user: null, setUser: () => {} });

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [user, setUser] = useState<User | null>(null);

	const { value } = useLocalStorage<User>('login');

	const initial: Context = {
		user,
		setUser,
	};

	useEffect(() => {
		if (value) setUser(value);
	}, [value]);

	return (
		<AuthContext.Provider value={initial}>{children}</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);
