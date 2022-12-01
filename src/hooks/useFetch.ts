import { useEffect, useState } from 'react';

interface Props {
	path: string;
}

export const useFetch = <T>({ path }: Props) => {
	const [data, setData] = useState<T[] | null>(null);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [error, setError] = useState('');

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);

			try {
				const result = await fetch(path, { method: 'GET' });

				const json = await result.json();

				setData(json);
			} catch (err) {
				setIsError(true);
				setError('Something went wrong!');
			}
			setIsLoading(false);
		};

		fetchData();
	}, [path]);

	return { data, isLoading, isError, error };
};
