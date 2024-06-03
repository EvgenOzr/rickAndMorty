import React from 'react';
import ItemDetails, {Record, RecordPerson} from '../item-details'
import { withRiMService } from '../hoc-helper';

const LocationDetails = (props) => {
    // const {residents} = props;
    // console.log(props);
    return(
        <ItemDetails {...props}>
            <Record field='type' label='Тип:'/>
            <Record field='dimension' label='Измерение:'/>
            <RecordPerson field='residents' label='Обитатели:'/>
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