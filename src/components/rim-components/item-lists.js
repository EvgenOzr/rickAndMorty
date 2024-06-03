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
const renderSeasonEpisode = ({episode, name}) => <span>Season: {episode.slice(1, 3)} - {name} </span>

const CharacterList = withRiMService(withData(ListWithChildren), mapCharacterMethodsToProps)
const LocationsList = withRiMService(withData(ListWithChildren), mapLocationsMethodsToProps)
const EpisodesList = withRiMService(withData(withChildFunction(ItemList, renderSeasonEpisode)), mapEpisodesMethodsToProps)

export {
    CharacterList,
    LocationsList,
    EpisodesList
}