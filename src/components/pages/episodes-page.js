import React from "react";
import {  EpisodesList, EpisodeDetails } from "../rim-components";
import {useNavigate, useParams} from 'react-router-dom'
import Row from "../row";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const EpisodesPage = () => {

    let {id} = useParams();
    const navigate = useNavigate();

    return(
        // <Row 
        //     left={<EpisodesList onItemSelected={(id) => {navigate(`/episode/${id}`)}}/>} 
        //     right={<EpisodeDetails itemId={id}/>}
        // />
            <DropdownButton id="dropdown-basic-button" title="Dropdown button">
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
    )
}

export default EpisodesPage;

