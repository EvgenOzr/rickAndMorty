import React from 'react';
import ItemDetails, {Record} from '../item-details'
import { withRiMService } from '../hoc-helper';

const LocationDetails = (props) => {
    return(
        <ItemDetails {...props}>
            <Record field='type' label='Тип:'/>
            <Record field='dimension' label='Измерение:'/>
        </ItemDetails>
    )
}

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getLocation,
        getImageUrl: swapiService.getLocationeImage
    }
}

export default withRiMService(LocationDetails, mapMethodsToProps)