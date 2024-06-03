import React, {useState} from "react";
import {CharacterDetails , CharacterList } from "../rim-components";
import Row from "../row";
import {useNavigate, useParams} from 'react-router-dom';
import './index.css'


const CharacterPage = () => {

    const [page, setPage] = useState(1) 
    let navigate = useNavigate();
    let {id} = useParams()

    const nextPage = (step) => {
        if(((step === -1) && (page > 1)) || (step === 1)){
            setPage((page) => page + step)
        }
    }

    return (
        <>
            <Row 
                left={<CharacterList page={page} onItemSelected={(id) => {navigate(`/character/${id}`)}}/>} 
                right={<CharacterDetails itemId={id}/>}
            />
            <div className="rowButton col-md-6">
                <button 
                    type="button" 
                    className="nextButton btn btn-primary"
                    onClick={() => nextPage(-1)}
                    >Previous Characters</button>
                <button 
                    type="button" 
                    className="nextButton btn btn-primary"
                    onClick={() => nextPage(1)}
                    >Next Characters</button>
            </div>
        </>


    )
}

export default CharacterPage;
