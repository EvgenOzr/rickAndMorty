import React, {useState} from "react";
import {CharacterDetails , CharacterList } from "../rim-components";
import Row from "../row";
import {useNavigate, useParams} from 'react-router-dom';
import './index.css'


const CharacterPage = () => {

    const [page, setPage] = useState(1) 
    let navigate = useNavigate();
    let {id} = useParams()

    const CheckPage = () => {
        setPage((page) => page + 1)
        // console.log(page);
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
                    className="nextButton btn btn-info"
                    onClick={CheckPage}
                    >Next Characters</button>
            </div>
        </>


    )
}

export default CharacterPage;
