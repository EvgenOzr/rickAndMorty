import React, {useState, useEffect} from "react";
import { LocationDetails, LocationsList } from "../rim-components";
import {useNavigate, useParams} from 'react-router-dom'
import Row from "../row";
import NavigationBlock from "./navigation-block";
import RiMService from "../../services/rickAndMorty-service";

const LocationsPage = () => {

    const [page, setPage] = useState(1);
    const [allPages, setAllPages] = useState(0);
    const {id} = useParams();
    const navigate = useNavigate()
    const rimService = new RiMService();

    const nextPage = (newPage) => {
        if (((newPage > 0) && (page < allPages)) || ((newPage < 0) && (page > 1)) ){
            setPage((p) => p + newPage)
        }
    }

    useEffect(() => {
        rimService
            .getAllPages('location')
            .then((pages) => setAllPages(pages))
    }, [])

    return(
        <>
            <Row 
                left={<LocationsList page={page} onItemSelected={(id) => {navigate(`/location/${id}`)}}/>} 
                right={<LocationDetails itemId={id}/>}
            />
            <NavigationBlock 
                nextPage={nextPage} 
                page={page} 
                allPages={allPages}
                prevBName={'Previous Locations'}
                nextBName={'Next Locations'}
            />
        </>
    )
}

export default LocationsPage;