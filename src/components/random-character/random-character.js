import React, {useEffect, useState} from 'react';
import './random-character.css';
import Spinner from '../spinner';
import Row from '../row';
import PropTypes from 'prop-types';
import { CharacterDetails } from '../rim-components';

const RandomCharacter = ({updateInterval}) => {

	const [charData, setCharData] = useState({
		charId: [],
		loading: true
	})

	const updateCharacter = () => {
		let characters = [];
		for(let i = 0; i < 4; i++){
			let id = Math.floor(1 + Math.random() * 825);
			characters.push(id)
		}
		// const id = Math.floor(1 + Math.random() * 825)
		setCharData({ charId: characters, loading: false})
	}
	
	useEffect(() => {
		updateCharacter();
		const timerID = setInterval(updateCharacter, updateInterval)
		return () => clearInterval(timerID)
	}, [])

	const { charId, loading} = charData;

	let characters = (
		<>
			<Row 
				left={<CharacterDetails itemId={charId[0]}/>}
				right={<CharacterDetails itemId={charId[1]}/>}
			/>
			<Row 
			left={<CharacterDetails itemId={charId[2]}/>}
			right={<CharacterDetails itemId={charId[3]}/>}
			/>
		</>
	)
	let content = loading ? <Spinner/> : characters

	return (
		<div>
			{content}
		</div>
	);

}

RandomCharacter.defaultProps = {
	updateInterval: 5000
}

RandomCharacter.propTypes = {
	updateInterval: PropTypes.number
}

export default RandomCharacter;