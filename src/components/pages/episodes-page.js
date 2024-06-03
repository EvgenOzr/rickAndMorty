import React, {useState} from "react";
import {  EpisodesList, EpisodeDetails } from "../rim-components";
import {useNavigate, useParams} from 'react-router-dom'
import Row from "../row";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const EpisodesPage = () => {

	const [page, setPage] = useState(1) 
	let {id} = useParams();
	const navigate = useNavigate();

	const nextPage = (step) => {
		if(((step === -1) && (page > 1)) || (step === 1)){
			setPage((page) => page + step)
		}
	}

	return(
		<>
			<Row 
				left={<EpisodesList page={page} onItemSelected={(id) => {navigate(`/episode/${id}`)}}/>} 
				right={<EpisodeDetails itemId={id}/>}
			/>
			<div className="rowButton col-md-6">
				<button 
					type="button" 
					className="nextButton btn btn-primary"
					onClick={() => nextPage(-1)}
					>Previous Episodes</button>
				<button 
					type="button" 
					className="nextButton btn btn-primary"
					onClick={() => nextPage(1)}
					>Next Episodes</button>
			</div>
		</>

	)
}

export default EpisodesPage;

