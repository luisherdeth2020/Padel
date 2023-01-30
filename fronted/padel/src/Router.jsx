import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Puntos from './components/Puntos';

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Header />} />
				<Route exact path="/marcador" element={<Puntos />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
