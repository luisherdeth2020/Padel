import './assets/css/App.css';
import Router from './Router';
import { DataProvider } from './context/userContext';

function App() {
	return (
		<DataProvider>
			<div className="App">
				<Router />
			</div>
		</DataProvider>
	);
}

export default App;

// instalar aixios, router dom
