import { NavLink } from 'react-router-dom';
import { useState, useContext } from 'react';
import { DataContext } from '../context/userContext';
import styles from './Header.module.css';

const Header = () => {
	const { names, setNames } = useContext(DataContext);
	const [inputValue, setInputValue] = useState('');
	const [disabled, setDisabled] = useState(false);

	const enviarForm = (e) => {
		e.preventDefault();
		
		if (inputValue === '') {
			return;
		}
		setNames([...names, inputValue]);
		setInputValue('');
		if (names.length === 3) {
			setDisabled(true);
		}
	};
	return (
		<>
			<div className="container">
				<h1>BIENVENIDO A WIKIPADEL</h1>
				<div className="subtitle my-5">
					<h3>Nombre de los participantes</h3>
				</div>
				<div className={styles.container__main}>
					<form onSubmit={enviarForm}>
						<input
							placeholder="Nombres.."
							disabled={disabled}
							type="text"
							value={inputValue}
							onChange={(e) => setInputValue(e.target.value)}
						/>
						<button className={styles.add}  disabled={disabled} type="submit">
							Añadir
						</button>
						{disabled && (
							<div className={styles.message}>
								⚠️Máximo de participantes es <span className={styles.message__num}>4</span>⚠️
							</div>
						)}
					</form>
					<div className={styles.participantes}>
						<div className={styles.participantes__caja}>
							{names.map((name, index) => (
								<p className={styles.participantes__name} key={index}>
									🥎 {name}
								</p>
							))}
						</div>
					</div>
				</div>
			</div>
			<NavLink to="/marcador" className="nav-link fs-2 my-5 button_89" role="button">
				Entrar
			</NavLink>
		</>
	);
};

export default Header;
