import './assets/css/App.css';
import Router from './Router';
import { DataProvider } from './context/userContext';

function App() {
	let docTitle = document.title;
	window.addEventListener('blur', () => {
		document.title = '😭 Come back 😭';
	});

	window.addEventListener('focus', () => {
		document.title = docTitle;
	});
	return (
		<DataProvider>
			<div className="App">
				<Router />
			</div>
		</DataProvider>
	);
}

export default App;