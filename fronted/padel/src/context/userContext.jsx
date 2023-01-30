import { createContext, useState } from 'react';

export const DataContext = createContext();
const data = [];

// componente Padre
export const DataProvider = ({ children }) => {
	const [names, setNames] = useState(data);
	return (
		<DataContext.Provider
			value={{
				names,
				setNames,
			}}
		>
			{children}
		</DataContext.Provider>
	);
};
