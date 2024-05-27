import React from 'react';
import ItemDetails, {Record} from '../item-details'
import { withRiMService } from '../hoc-helper';

const EpisodesDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field='episode' label='Эпизод:'/>
            <Record field='air_date' label='Дата выхода:'/>
        </ItemDetails>
    )
}

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getEpisode,
        getImageUrl: swapiService.getLocationeImage
    }
}

export default withRiMService(EpisodesDetails, mapMethodsToProps)
