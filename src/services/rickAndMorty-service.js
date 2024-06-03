  export default class RiMService {

  _apiBase = 'https://rickandmortyapi.com/api/';

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`)
    }
    return await res.json();
  }
 
  getCharacterImage = ({id}) => {
    return `https://rickandmortyapi.com/api/character/avatar/${id}.jpeg`
  }

  getLocationeImage = () => {
    return `https://t2.genius.com/unsafe/340x340/https%3A%2F%2Fimages.genius.com%2Fd043f8f4c06f117c3efeec06dc8761dd.1000x1000x1.jpg`
  }

  getAllCharacters = async (page = 1) =>{
    const res = await this.getResource(`character?page=${page}`);
    return res.results.map(this._transformCharacter).slice(0, 20);
  }

  getCharacter = async (id) => {
    const character = await this.getResource(`character/${id}/`);
    return this._transformCharacter(character);
  }

  getAllLocations = async (page = 1) => {
    const res = await this.getResource(`location?page=${page}`);
    return res.results.map(this._transformLocation).slice(0, 20);
  }

  getLocation = async (id) => {
    const location = await this.getResource(`location/${id}/`);
    return this._transformLocation(location)
  }

  getAllEpisodes = async (page = 1) => {
    const res = await this.getResource(`episode?page=${page}`);
    return res.results.map(this._transformEpisode).slice(0, 20);
  }

  getEpisode = async (id) => {
    const episode = await this.getResource(`episode/${id}/`);
    return this._transformEpisode(episode)
  }

  getAllCharactersImage = async (page) => {
    const res = await this.getResource(`character/?page=${page}`);
    return res.results.map(this._transformImages);
  } 

  getAllPages = async (section) => {
    const res = await this.getResource(`/${section}`);
    return res.info.pages;
  }
  _extractID = (item) => {
    return item.url.replace(/\D/gi, '');
  }

  _transformCharacter = (person) => {
    return {
      id: this._extractID(person),
      // image: this.getCharacterImage(this._extractID(person)),
      name: person.name,
      status: person.status,
      species: person.species,
      gender: person.gender,
    }
  }

  _transformLocation = (location) => {
    return {
      id: this._extractID(location),
      name: location.name,
      type: location.type,
      dimension: location.dimension,
      residents: location.residents
    }
  }

  _transformEpisode= (episode) => {
    return {
      id: this._extractID(episode),
      name: episode.name,
      air_date: episode.air_date,
      episode: episode.episode
    }
  }

  _transformImages= (character) => {
    return {
      name: character.name,
      image: character.image
    }
  }
}
