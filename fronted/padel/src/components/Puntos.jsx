import { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import axios from 'axios';
import { useEffect, useContext } from 'react';
import { DataContext } from '../context/userContext';
import '../assets/css/Puntos.css';

function Puntos() {
	const { names, setNames } = useContext(DataContext);

	const [result1, setResult1] = useState({ set1: 0, set2: 0, set3: 0, totalPoints: 0 });
	const [result2, setResult2] = useState({ set1: 0, set2: 0, set3: 0, totalPoints: 0 });
	const [disabled, setDisabled] = useState(false);
	const [victory, setVictory] = useState({ show: false, Message: '' });
	const [isLoadling, setIsLoadling] = useState(false);

	// useEffect(() => {
	// 	(async () => {
	// 		const data = {
	// 			idTeam1: '',
	// 			idTeam2: '',
	// 			sets: [
	// 				{
	// 					Equipo1set1: result1.set1,
	// 					Equipo1set2: result1.set2,
	// 					Equipo2set1: result2.set1,
	// 					Equipo2set2: result2.set2,
	// 					totalPoints: { equipo1: result1.totalPoints, equipo2: result2.totalPoints },
	// 					finished: false,
	// 				},
	// 			],
	// 		};
	// 		if (isLoadling) {
	// 			await axios
	// 				.post('http://localhost:3900/api/score', data)

	// 				.then(() => {
	// 					setIsLoadling(false);
	// 				})
	// 				.catch((err) => {
	// 					setError(err.message);
	// 					setIsLoadling(false);
	// 					console.error('Error ', err.message);
	// 				});
	// 			setIsLoadling(false);
	// 		}
	// 	})();
	// }, [result1, result2]);
	const restablecer = () => {
		setNames([]);
	};

	const winnerTitle = names.length === 2 ? 'CAMPEÓN' : 'CAMPEONES';
	const winnerNames1 = names.length === 2 ? `🏆${names[0]}🏆` : `🏆${names[0]} & ${names[1]}🏆`;
	const winnerNames2 = names.length === 2 ? `🏆${names[1]}🏆` : `🏆${names[2]} & ${names[3]}🏆`;

	const player1Has40Points = result1.totalPoints === 40;
	const player2Has40Points = result2.totalPoints === 40;
	const player1WonSet1 = result1.set1 === 6;
	const player1WonSet2 = result1.set2 === 6;
	const player2WonSet1 = result2.set1 === 6;
	const player2WonSet2 = result2.set2 === 6;
	const player2NotWinGame1 = result2.set1 < 6;
	const player1NotWinGame1 = result1.set1 < 6;
	const player1NotWinSet2 = result1.set2 === 5;
	const player1NotWinSet3 = result1.set3 === 5;
	const player2NotWinSet2 = result2.set2 === 5;
	const player2NotWinSet3 = result2.set3 === 5;

	function showVictoryMessage(num) {
		setVictory({
			show: true,
			Message: num === 1 ? winnerNames1 : winnerNames2,
		});
	}
	async function handleClickOne() {
		// setIsLoadling(true);

		setResult1({ ...result1, totalPoints: result1.totalPoints + 15 });
		if (result1.totalPoints === 30) {
			setResult1({ ...result1, totalPoints: result1.totalPoints + 10 });
		}
		// ?TODO
		if (player1WonSet1 && player1NotWinSet2 && player1Has40Points) {
			setResult1({ ...result1, set2: 6, totalPoints: 0 });
			setResult2({ ...result2, totalPoints: 0 });

			setDisabled(true);
			return showVictoryMessage(1);
		}
		if (!player1Has40Points) return;

		if (player2NotWinGame1) {
			setResult1({ ...result1, set1: result1.set1 + 1, totalPoints: 0 });
			setResult2({ ...result2, totalPoints: 0 });
		}
		if (player1WonSet1) {
			setResult1({ ...result1, set2: result1.set2 + 1, totalPoints: 0 });
		}
		if (player2WonSet2) {
			setResult1({ ...result1, set3: result1.set3 + 1, totalPoints: 0 });
			setResult2({ ...result2, totalPoints: 0 });
		}
		if (player2WonSet1) {
			setResult1({ ...result1, set2: result1.set2 + 1, totalPoints: 0 });
			setResult2({ ...result2, totalPoints: 0 });
		}
		if (player1WonSet2) {
			setResult1({ ...result1, set3: result1.set3 + 1, totalPoints: 0 });
		}

		if (player1WonSet2 && player1NotWinSet3) {
			setResult1({ ...result1, set3: 6, totalPoints: 0 });

			setDisabled(true);
			return showVictoryMessage(1);
		}
		if (player1WonSet1 && player1NotWinSet3) {
			setResult1({ ...result1, set3: 6, totalPoints: 0 });

			setDisabled(true);
			return showVictoryMessage(1);
		}
	}
	function deleteClickA() {
		setResult1({ ...result1, totalPoints: result1.totalPoints - 15 });
		if (result1.totalPoints === 40) {
			setResult1({ ...result1, totalPoints: result1.totalPoints - 10 });
		}
		if (result1.totalPoints === 0) {
			setResult1({ ...result1 });
		}
	}
	async function handleClickTwo() {
		setIsLoadling(true);

		setResult2({ ...result2, totalPoints: result2.totalPoints + 15 });
		if (result2.totalPoints === 30) {
			setResult2({ ...result2, totalPoints: result2.totalPoints + 10 });
		}
		if (player2Has40Points && player1NotWinGame1) {
			setResult2({ ...result2, set1: result2.set1 + 1, totalPoints: 0 });
			setResult1({ ...result1, totalPoints: 0 });
		}
		if (player2WonSet1 && player2Has40Points) {
			setResult2({ ...result2, set2: result2.set2 + 1, totalPoints: 0 });
		}
		if (player2Has40Points && player1WonSet2) {
			setResult2({ ...result2, set3: result2.set3 + 1, totalPoints: 0 });
			setResult1({ ...result1, totalPoints: 0 });
		}

		if (player2Has40Points && player1WonSet1) {
			setResult1({ ...result1, totalPoints: 0 });
			setResult2({ ...result2, set2: result2.set2 + 1, totalPoints: 0 });
		}

		if (player2WonSet2 && player2Has40Points) {
			setResult2({ ...result2, set3: result2.set3 + 1, totalPoints: 0 });
		}
		if (player2WonSet1 && player2NotWinSet2 && player2Has40Points) {
			setResult2({ ...result2, set2: 6, totalPoints: 0 });

			setDisabled(true);
			return showVictoryMessage(2);
		}
		if (player2WonSet2 && player2NotWinSet3 && player2Has40Points) {
			setResult2({ ...result2, set3: 6, totalPoints: 0 });

			setDisabled(true);
			return showVictoryMessage(2);
		}
		if (player2WonSet1 && player2NotWinSet3 && player2Has40Points) {
			setResult2({ ...result2, set3: 6, totalPoints: 0 });

			setDisabled(true);
			return showVictoryMessage(2);
		}
	}

	function deleteClickB() {
		setResult2({ ...result2, totalPoints: result2.totalPoints - 15 });
		if (result2.totalPoints === 40) {
			setResult2({ ...result2, totalPoints: result2.totalPoints - 10 });
		}
		if (result2.totalPoints === 0) {
			setResult2({ ...result2 });
		}
	}

	return (
		<>
			<table className="table text-uppercase bg--table">
				<thead>
					<tr>
						<th>Jugadores</th>
						<th>set 1</th>
						<th>set 2</th>
						<th>set 3</th>
						<th>points</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td className="border-right">
							<div className="d-flex text-start">
								{names.length === 2 ? (
									<p>{names[0]}</p>
								) : (
									<div>
										<p>{names[0]}</p>
										<p>{names[1]}</p>
									</div>
								)}
							</div>
						</td>

						<td className="align-middle bgcolor">{result1.set1}</td>
						<td className="align-middle bgcolor">{result1.set2}</td>
						<td className="align-middle bgcolor">{result1.set3}</td>
						<td className="align-middle bgcolor--resultado">{result1.totalPoints}</td>
					</tr>
					<tr>
						<td className="border-right">
							<div className="d-flex text-start">
								{names.length === 2 ? (
									<p>{names[1]}</p>
								) : (
									<div>
										<p>{names[2]}</p>
										<p>{names[3]}</p>
									</div>
								)}
							</div>
						</td>
						<td className="align-middle bgcolor">{result2.set1}</td>
						<td className="align-middle bgcolor">{result2.set2}</td>
						<td className="align-middle bgcolor">{result2.set3}</td>
						<td className="align-middle bgcolor--resultado">{result2.totalPoints}</td>
					</tr>
				</tbody>
			</table>
			<div className="d-flex flex-column align-items-center">
				{victory.show && (
					<>
						<h3 className="text-center victory">
							¡{winnerTitle}!<span className="h2 text__message">{victory.Message}</span>
						</h3>
						<img
							src="https://thumbs.gfycat.com/EasygoingComplicatedIndianpalmsquirrel-size_restricted.gif"
							alt="lets gooo"
						/>
					</>
				)}
			</div>

			<div className="container d-flex text-uppercase flex-column align-items-center">
				<div>
					<input
						disabled={disabled}
						className="my-3 me-2 mx-sm-3 css-button text-uppercase"
						type="button"
						value="sumar a"
						onClick={handleClickOne}
					/>
					<input
						disabled={disabled}
						className="my-3 mx-sm-3 css-button text-uppercase"
						type="button"
						value="sumar b"
						onClick={handleClickTwo}
					/>
				</div>
				<div className="text2">
					<input
						className="my-3 me-2 mx-sm-3 css-button text-uppercase"
						type="button"
						value="restar a"
						onClick={deleteClickA}
					/>
					<input
						className="my-3  mx-sm-3 css-button text-uppercase"
						type="button"
						value="restar b"
						onClick={deleteClickB}
					/>
				</div>
			</div>
			<NavLink onClick={restablecer} to="/" className="nav-link fs-2 mt-5 button_30" role="button">
				<span className="text">Inicio</span>
			</NavLink>
		</>
	);
}
export default Puntos;
