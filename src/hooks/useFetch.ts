import { useEffect, useState } from 'react';

interface Props {
	path: string;
}

export const useFetch = <T>({ path }: Props) => {
	const [data, setData] = useState<T[] | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			const result = await fetch(path, { method: 'GET' });

			const json = await result.json();

			setData(json);
		};

		fetchData();
	}, [path]);

	return { data };
};
