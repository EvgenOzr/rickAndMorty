import React, {useEffect, useState} from 'react';
import RiMService from '../../services/rickAndMorty-service'
import './random-person.css';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator/error-indicator';
import PropTypes from 'prop-types'

const RandomPerson = ({updateInterval}) => {

	// defaultProps = {
	// 	updateInterval: 10000
	// }
	
	// propTypes = {
	// 	updateInterval: PropTypes.number
	// }
	
	const rimService = new RiMService();
	const [personData, setPersonData] = useState({
		person: {},
		loading: true,
		error: false
	})

	// state = {
	// 	person: {},
	// 	loading: true,
	// 	error: false
	// }

	const onCharacterLoaded = (person) => {
		setPersonData({ person, loading: false, error: false})
	}

	const onError = (err) => {
		setPersonData({...personData, error: true, loading: false})
	}

	const updateCharacter = () => {
		const id = Math.floor(Math.random()*17) + 2;
		rimService
			.getCharacter(id)
			.then(onCharacterLoaded)
			.catch(onError)
	}
	
	useEffect(() => {
		updateCharacter();
		const timerID = setInterval(updateCharacter, updateInterval)
		return () => clearInterval(timerID)
	}, [])


	const { person, loading, error } = personData;

	let content = loading ? <Spinner/> : <PersonView person={person}/>
	if(error) content = <ErrorIndicator/>

	return (
		<div className="random-character jumbotron rounded card">
			{content}
		</div>
	);

}

RandomPerson.defaultProps = {
	updateInterval: 2000
}

RandomPerson.propTypes = {
	updateInterval: PropTypes.number
}

const PersonView = ({person}) => {

	const {id, name, status, species, gender} = person;

	return (
		<>

			<div>
				{/* <div className="d-flex justify-content-center flex-column"> */}
				<div className="title">
					<img className="character-image"
					src={`https://rickandmortyapi.com/api/character/avatar/${id}.jpeg`} 
					alt='character'/>
					<h4>{name}</h4>
				</div>
				
				<ul className="list-group list-group-flush">
					<li className="list-group-item">
						<span className="term">Статус:</span>
						<span>{status}</span>
					</li>
					<li className="list-group-item">
						<span className="term">Вид:</span>
						<span>{species}</span>
					</li>
					<li className="list-group-item">
						<span className="term">Пол:</span>
						<span>{gender}</span>
					</li>
				</ul>
			</div>
		</>
	)

}

export default RandomPerson;