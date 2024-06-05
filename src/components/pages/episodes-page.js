import React, {useState, useEffect} from "react";
import {  EpisodesList, EpisodeDetails } from "../rim-components";
import {useNavigate, useParams} from 'react-router-dom'
import Row from "../row";
import NavigationBlock from "./navigation-block";
import RiMService from "../../services/rickAndMorty-service";

const EpisodesPage = () => {

	const [page, setPage] = useState(1);
	const [allPages, setAllPages] = useState(0);
	let {id} = useParams();
	const navigate = useNavigate();
	const rimService = new RiMService();

    const nextPage = (newPage) => {
        if (((newPage > 0) && (page < allPages)) || ((newPage < 0) && (page > 1)) ){
            setPage((p) => p + newPage)
        }
    }

	useEffect(() => {
        rimService
            .getAllPages('episode')
            .then((pages) => setAllPages(pages))
    }, [])

	return(
		<>
			<Row 
				left={<EpisodesList page={page} onItemSelected={(id) => {navigate(`/episode/${id}`)}}/>} 
				right={<EpisodeDetails itemId={id}/>}
			/>
            <NavigationBlock 
                nextPage={nextPage} 
                page={page} 
                allPages={allPages}
                prevBName={'Previous Episodes'}
                nextBName={'Next Episodes'}
            />
		</>
	)
}

export default EpisodesPage;

