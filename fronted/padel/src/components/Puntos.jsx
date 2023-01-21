import { useState } from 'react';
import axios from 'axios';
import Global from '../Global';
import { useEffect } from 'react';

function Puntos() {
	// Game { idTeam1: '' idTeam2: '' sets: [ { set: 1, points: 2, totalPoints: { team1: 30, team2: 0}, finished: false } ] }

	const url = Global.url;

	const [result1, setResult1] = useState({ set1: 0, set2: 0, set3: 0, totalPoints: 0 });
	const [result2, setResult2] = useState({ set1: 0, set2: 0, set3: 0, totalPoints: 0 });
	const [disabled, setDisabled] = useState(false);
	const [victory, setVictory] = useState({ show: false, Message: '' });
	const [error, setError] = useState('');
	const [isLoadling, setIsLoadling] = useState(false);

	function handleClickOne() {
		setResult1({ ...result1, totalPoints: result1.totalPoints + 15 });
		if (result1.totalPoints >= 30) {
			setResult1({ ...result1, totalPoints: result1.totalPoints + 10 });
		}
		if (result1.totalPoints >= 40) {
			setResult1({ ...result1, set1: result1.set1 + 1, totalPoints: 0 });
			setResult2({ ...result2, totalPoints: 0 });
		}

		if (result1.set1 === 2 && result1.totalPoints === 40) {
			setResult1({ ...result1, set2: result1.set2 + 1, totalPoints: 0 });
		}
		if (result1.set1 === 2 && result1.set2 === 1 && result1.totalPoints === 40) {
			setDisabled(true);
			return setVictory({ show: true, Message: 'VICTORYYYYYYY' });
		}
		
		setIsLoadling(true);
		axios
			.post(url + '/score', {
				idTeam1: '',
				idTeam2: '',
				sets: [
					{
						set: 1,
						points: 2,
						totalPoints: { team1: result1.totalPoints, team2: result2.totalPoints },
						finished: false,
					},
				],
			})
			.then(() => {
				setIsLoadling(false);
				console.log('datos enviados');
			})
			.catch((err) => {
				setError(err.message);
				setIsLoadling(false);
				console.error('Error ', err.message);
			});
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

	function handleClickTwo() {
		setResult2({ ...result2, totalPoints: result2.totalPoints + 15 });
		if (result2.totalPoints === 30) {
			setResult2({ ...result2, totalPoints: result2.totalPoints + 10 });
		}
		if (result2.totalPoints === 40) {
			setResult2({ ...result2, set1: result2.set1 + 1, totalPoints: 0 });
			setResult1({ ...result1, totalPoints: 0 });
		}

		if (result2.set1 === 2 && result2.totalPoints === 40) {
			setResult2({ ...result2, set2: result2.set2 + 1, totalPoints: 0 });
		}
		if (result2.set1 === 2 && result2.set2 === 1 && result2.totalPoints === 40) {
			setDisabled(true);
			return setVictory({ show: true, Message: 'VICTORYYYYYYY' });
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
							<div className="d-flex flex-column align-items-center">
								<p>WIKISPAIN</p>
								<p>COSMO</p>
							</div>
						</td>

						<td className="align-middle">{result1.set1}</td>
						<td className="align-middle">{result1.set2}</td>
						<td className="align-middle">{result1.set3}</td>
						<td className="align-middle">{result1.totalPoints}</td>
					</tr>
					<tr>
						<td>
							<div className="d-flex flex-column align-items-center">
								<p>HANS</p>
								<p>TONIC</p>
							</div>
						</td>
						<td className="align-middle">{result2.set1}</td>
						<td className="align-middle">{result2.set2}</td>
						<td className="align-middle">{result2.set3}</td>
						<td className="align-middle">{result2.totalPoints}</td>
					</tr>
				</tbody>
			</table>
			<div className="d-flex flex-column align-items-center">
				<h1 className="text-center text-danger">{victory.Message}</h1>
				{victory.show && (
					<img
						src="https://i.pinimg.com/originals/ed/3d/b4/ed3db48d311233f99947e2111f6fd1c6.gif"
						alt="lets gooo"
						width="40%"
						height="40%"
					/>
				)}
			</div>

			<div className="container d-flex flex-column align-items-center">
				<div className="color">
					<input
						disabled={disabled}
						className="my-3 mx-2"
						type="button"
						value="Equipo A"
						onClick={handleClickOne}
					/>
					<input
						disabled={disabled}
						className="my-3 mx-2"
						type="button"
						value="Equipo B"
						onClick={handleClickTwo}
					/>
				</div>
				<div className="text2">
					<input className="mx-3" type="button" value="DEL A" onClick={deleteClickA} />
					<input className="mx-3" type="button" value="DEL B" onClick={deleteClickB} />
				</div>
			</div>
		</>
	);
}
export default Puntos;
