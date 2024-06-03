import React, {useEffect, useState} from 'react';
import './random-person.css';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator/error-indicator';
import PropTypes from 'prop-types';
import { CharacterDetails } from '../rim-components';

const RandomPerson = ({updateInterval}) => {

	const [personData, setPersonData] = useState({
		personId: null,
		loading: true
	})

	const updateCharacter = () => {
		const id = Math.floor(Math.random() * 826 + 1)
		setPersonData({ personId: id, loading: false})
	}
	
	useEffect(() => {
		updateCharacter();
		const timerID = setInterval(updateCharacter, updateInterval)
		return () => clearInterval(timerID)
	}, [])


	const { personId, loading} = personData;

	let content = loading ? <Spinner/> : <CharacterDetails itemId={personId}/>
	return (
		<div>
			{content}
		</div>
	);

}

RandomPerson.defaultProps = {
	updateInterval: 5000
}

RandomPerson.propTypes = {
	updateInterval: PropTypes.number
}

export default RandomPerson;