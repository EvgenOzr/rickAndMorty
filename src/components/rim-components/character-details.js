import React from 'react';
import ItemDetails, {Record} from '../item-details'
import { withRiMService } from '../hoc-helper';


const CharacterDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field='status' label='Статус:'/>
            <Record field='species' label='Вид:'/>
            <Record field='gender' label='Пол:'/>
        </ItemDetails>
    )
}

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getCharacter,
        getImageUrl: swapiService.getCharacterImage
    }
}

export default withRiMService(CharacterDetails, mapMethodsToProps)
