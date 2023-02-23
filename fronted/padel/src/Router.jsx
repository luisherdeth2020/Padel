import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Puntos from './components/Puntos';

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Header />} />
				<Route path="/marcador" element={<Puntos />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
