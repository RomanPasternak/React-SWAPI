import React from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import PeoplePage from '../people-page';

import './app.css';
import SwapiServise from '../../services/swapi-serwice';

export default class App extends React.Component {
    
    swapiServise = new SwapiServise();
    
    render() {
        return (
            <div className="app-container">
                <Header />
                <RandomPlanet />
                <PeoplePage />

                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList 
                                getData={ this.swapiServise.getAllPlenets }/>
                    </div>
                    <div className="col-md-6">
                        <PersonDetails />
                    </div>
                </div>

                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList 
                                getData={ this.swapiServise.getAllStarships }/>
                    </div>
                    <div className="col-md-6">
                        <PersonDetails />
                    </div>
                </div>
            </div>
        );
    };
};