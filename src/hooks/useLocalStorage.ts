import { useEffect, useState } from 'react';

export const useLocalStorage = <T>(key: string) => {
	const [value, setValue] = useState<T | null>(null);

	useEffect(() => {
		const result = localStorage.getItem(key);

		if (result) {
			setValue(JSON.parse(result));
		}
	}, [key]);

	return { value };
};
