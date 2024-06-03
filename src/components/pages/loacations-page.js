import React, {useState} from "react";
import { LocationDetails, LocationsList } from "../rim-components";
import {useNavigate, useParams} from 'react-router-dom'
import Row from "../row";

const LocationsPage = () => {

    const [page, setPage] = useState(1) 
    const {id} = useParams();
    const navigate = useNavigate()

    const nextPage = (step) => {
        if(((step === -1) && (page > 1)) || (step === 1)){
            setPage((page) => page + step)
        }
    }

    return(
        <>
            <Row 
                left={<LocationsList page={page} onItemSelected={(id) => {navigate(`/location/${id}`)}}/>} 
                right={<LocationDetails itemId={id}/>}
            />
            <div className="rowButton col-md-6">
                <button 
                    type="button" 
                    className="nextButton btn btn-primary"
                    onClick={() => nextPage(-1)}
                    >Previous Locations</button>
                <button 
                    type="button" 
                    className="nextButton btn btn-primary"
                    onClick={() => nextPage(1)}
                    >Next Locations</button>
            </div>
        </>
    )
}

export default LocationsPage;