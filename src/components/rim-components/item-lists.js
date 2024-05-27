import React from 'react';
import ItemList from '../item-list/'
import {withData, withRiMService} from '../hoc-helper/'


const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        )
    }
}

const mapCharacterMethodsToProps = (RiMService) => {
    return {
        getData: RiMService.getAllCharacters,
        // page: page
    }
}
const mapLocationsMethodsToProps = (RiMService) => {
    return {
        getData: RiMService.getAllLocations
    }
}
const mapEpisodesMethodsToProps = (RiMService) => {
    return {
        getData: RiMService.getAllEpisodes
    }
}
const ListWithChildren = withChildFunction (ItemList, ({name}) => <span>{name}</span>)
const renderModelAndName = ({model, name, id}) => <span>{name} ({model}) (id:{id})</span>

const CharacterList = withRiMService(withData(ListWithChildren), mapCharacterMethodsToProps)
const LocationsList = withRiMService(withData(ListWithChildren), mapLocationsMethodsToProps)
const EpisodesList = withRiMService(withData(ListWithChildren), mapEpisodesMethodsToProps)
// const StarshipsList = withSwapiService(withData(withChildFunction(ItemList, renderModelAndName)), mapEpisodesMethodsToProps)

export {
    CharacterList,
    LocationsList,
    EpisodesList
}