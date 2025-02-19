import React, { Component } from 'react';
import RiMService from '../../services/rickAndMorty-service';
import ErrorBoundry from '../error-boundry';
import { RiMServiceProvider} from '../rim-service-contex/rim-service-context';
import { CharacterPage, LocationsPage, EpisodesPage} from '../pages';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from '../header';
import RandomCharacter from '../random-character';
import CarouselImages from '../carousel-images';
import './app.css';

export default class App extends Component {

  state = {
    rimService: new RiMService(),
    hasError: false,
  }

  componentDidCatch(){
    this.setState({hasError: true})
  }

  render(){

    let NoMatch = () => {
      const location = useLocation();
    
      return (
        <div>
          <h3>
            No match for <code>{location.pathname}</code>
          </h3>
        </div>
      );
    }
    return (
      <ErrorBoundry>
        <RiMServiceProvider value={this.state.rimService}>
        <Router>
            <div className='stardb-app'>
              <Header/>
                <Routes>
                    <Route path='/' element={<RandomCharacter/>}/>
                    <Route path='/character/:id?' element={<CharacterPage/>}/>
                    <Route path='/location/:id?' element={<LocationsPage/>}/>
                    <Route path='/episode/:id?' element={<EpisodesPage/>}/>
                    <Route path='/allImages/' element={<CarouselImages/>}/>
                    <Route path='*' element={<NoMatch/>}/>
                </Routes>
            </div>
          </Router>
        </RiMServiceProvider>
      </ErrorBoundry>
    );
  }
};
