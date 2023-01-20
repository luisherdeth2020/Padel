import { useState } from 'react';

function Puntos() {
	const [pointOne, setPointOne] = useState(0);
	const [pointTwo, setPointTwo] = useState(0);
	const [gameOne, setGameOne] = useState(0);
	const [gameTwo, setGameTwo] = useState(0);
	const [cosmo, setCosmo] = useState(0);
	const [victory, setVictory] = useState({ show: false, Message: '' });

	// function handleClickOne() {
	//     setPoint(point + 15);
	//     // if (game === 2) {
	// 	// 	setCosmo(cosmo + 1);
	// 	// 	setGame(0);
	//     //     setPoint(0)
	// 	// }
	//     if (game === 1 && point === 40) {
	//         setCosmo(cosmo + 1);
	//         setVictory({ show: true, Message: 'VICTORIAAAAAAA' });
	//         setGame(0);
	//         setPoint(0);
	//     }
	//     else if (point === 30) {
	//         setPoint(point + 10);
	//     }
	//     else if (point >= 40) {
	//         setGame(game + 1);
	//         setPoint(0);
	//     }

	// }
	function handleClickOne() {
		setPointOne(pointOne + 15);
		if (gameOne === 3 && pointOne === 40) {
			// setCosmo(cosmo + 1);
			setVictory({ show: true, Message: 'VICTORIAAAAAAA' });
			setGameOne(0);
			setPointOne(0);
		} else if (pointOne === 30) {
			setPointOne(pointOne + 10);
		} else if (pointOne >= 40) {
			setGameOne(gameOne + 1);
			setPointOne(0);
		}
	}
	function handleClickTwo() {
		setPointTwo(pointTwo + 15);
	}
	function deleteClick() {
		setPoint(point - 15);
		if (point === 0) {
			setPoint(0);
		}
	}
	return (
		<>
			<table className="table">
				<thead>
					<tr>
						<th>OCTVOS</th>
						<th>SET 1</th>

						<th>SET 2</th>
						<th>SET 3</th>
						<th>POINTS</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<div className="d-flex flex-direc align-items-center">
								<p>WIKISPAIN</p>
								<p>COSMO</p>
							</div>
						</td>
						<td>{setGameOne}</td>
						<td>{setGameOne}</td>
						<td>{setGameOne}</td>
						<td>{pointOne}</td>
					</tr>
					<tr>
						<td></td>
						<td>0</td>
						<td>0</td>
						<td>0</td>
						<td>0</td>
					</tr>
				</tbody>
			</table>
			{/* <div className="newPublication">
				<div className="victory">{victory.Message}</div>
				<div className="sets">{cosmo}</div>
				<div className="game my-2">
					<h3>Equipo A </h3>
					{gameOne}
				</div>
				<div className="game my-2">
					<h3>Equipo B = {gameTwo}</h3>
				</div>
				<div className="teamOne">{pointOne}</div>
				<div className="teamTwo">{pointTwo}</div>
			</div> */}

			<input className="my-3 mx-3" type="button" value="Equipo A" onClick={handleClickOne} />
			<input className="my-3" type="button" value="Equipo B" onClick={handleClickTwo} />
			<input className="mx-4" type="button" value="Delete" onClick={deleteClick} />
		</>
	);
}
export default Puntos;
