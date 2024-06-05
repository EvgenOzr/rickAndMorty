import React, {useState, useEffect} from "react";
import {CharacterDetails , CharacterList } from "../rim-components";
import Row from "../row";
import {useNavigate, useParams} from 'react-router-dom';
import NavigationBlock from "./navigation-block";
import RiMService from "../../services/rickAndMorty-service";
import './index.css'


const CharacterPage = () => {

    const [page, setPage] = useState(1);
    const [allPages, setAllPages] = useState(0); 
    let navigate = useNavigate();
    let {id} = useParams();
    const rimService = new RiMService();

    const nextPage = (newPage) => {
        if (((newPage > 0) && (page < allPages)) || ((newPage < 0) && (page > 1)) ){
            setPage((p) => p + newPage)
        }
    }

    useEffect(() => {
        rimService
            .getAllPages('character')
            .then((pages) => setAllPages(pages))
    }, [])

    return (
        <>
            <Row 
                left={<CharacterList page={page} onItemSelected={(id) => {navigate(`/character/${id}`)}}/>} 
                right={<CharacterDetails itemId={id}/>}
            />
            <NavigationBlock 
                nextPage={nextPage} 
                page={page} 
                allPages={allPages}
                prevBName={'Previous Characters'}
                nextBName={'Next Characters'}
            />
        </>


    )
}

export default CharacterPage;
