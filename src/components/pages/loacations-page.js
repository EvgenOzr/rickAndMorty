import React from "react";
import { LocationDetails, LocationsList } from "../rim-components";
import {useNavigate, useParams} from 'react-router-dom'
import Row from "../row";

const LocationsPage = () => {

    const {id} = useParams();
    const navigate = useNavigate()

    return(
        <Row 
            left={<LocationsList onItemSelected={(id) => {navigate(`/location/${id}`)}}/>} 
            right={<LocationDetails itemId={id}/>}
        />
    )
}

export default LocationsPage;