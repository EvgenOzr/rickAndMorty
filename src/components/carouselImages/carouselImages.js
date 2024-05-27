import React, {useState, useEffect} from "react";
import {  EpisodesList, EpisodeDetails } from "../rim-components";
import {useNavigate, useParams} from 'react-router-dom'
import Row from "../row";
import Spinner from '../spinner'
import ErrorIndicator from '../error-indicator/error-indicator';
import RiMService from '../../services/rickAndMorty-service';
import './carouselImages.css';

const CarouselImages = () => {

    const [allImages, setAllImages] = useState({
        images: [],
        loading: true,
        error: false
    })
    const [page, setPage] = useState(1);
    const [allPages, setAllPages] = useState(0);

    const rimService = new RiMService();

    const onImagesLoaded = (images) => {
        setAllImages({
            images,
            loading: false, 
            error: false
        });
	}

	const onError = (err) => {
		setAllImages({...images, error: true, loading: false})
	}

    const loadAllImages = () => {
        rimService
            .getAllCharactersImage(page)
            .then(onImagesLoaded)
            .catch(onError)

	}
	
	useEffect(() => {
        loadAllImages()
    }, [page])

    useEffect(() => {
        rimService
            .getAllPages()
            .then((pages) => setAllPages(pages))
    }, [])

    const {images, loading, error} = allImages;
    let content = loading ? <Spinner/> : <AllImages images ={images}/>
    // console.log(loading, error, content);
    if(error) content = <ErrorIndicator/>

    const changePage = (newPage) => {
        if (newPage > 0){
            if(page < allPages) setPage((p) => p + newPage)
        } else { 
            if(page > 1) setPage((p) => p + newPage)
        }
    } 

    return(
        <div>
            <div className="controlButtons">
                <button className="btn btn-primary" onClick={() => changePage(-1)}>Previous images</button>
                <span className="currentPage">Current page: {page}/{allPages}</span>
                <button className="btn btn-primary" onClick={() => changePage(1)}>Next images</button>
            </div>
            {content}
        </div>
    )
}

const AllImages = ({images}) => {
    // console.log(allImages);
    const allImages = images.map(({image, name}) => {
        if(name.length > 10) {
            name = name.slice(0, 15)
        }
        return (
            <div
                className="allImage" 
                key = {image.replace(/\D/gi, '')}>
                <img
                    className="character-image"
                    src={image} 
                    alt='characterImage'/>
                <div className="imageName">{name}</div>
            </div>
        )
    })
    // console.log(allImages);
    return(
        <div className="all">
            {allImages}
        </div>
    )
}

export default CarouselImages;

