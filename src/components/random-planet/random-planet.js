import React from 'react';
import SwapiServise from '../../services/swapi-serwice';
import Spiner from '../spiner'

import './random-planet.css';

export default class RandomPlanet extends React.Component {

    swapiServise = new SwapiServise();

    state = {
        planet: {},
        loading: true
    };

    componentDidMount() {
        this.updatePlanet();
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false,
            err: false
        })
    };

    onError = (err) => {
        this.setState({
            loading: false,
            err: true
        });
    }

    updatePlanet() {
        const id = Math.floor(Math.random() * 25) + 2;
        this.swapiServise
            .getPlenet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError);
    };

    render() {

        const { planet, loading, err } = this.state;

        const spiner = loading ? <Spiner /> : null;
        const eror = err ? <div>Ooooops</div> : null;
        const content = (!loading && !err) ? <PlanetView planet={planet} /> : null;

        return (
            <div className="random-planet jumbotron rounded">
                { spiner}
                { eror}
                { content}
            </div>
        );
    };
};

const PlanetView = ({ planet }) => {

    const { id, name, population, rotationPeriod, diameter } = planet;

    return (
        <React.Fragment>
            <img className="planet-image"
                src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt='planet' />
            <div>
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Population</span>
                        <span>{population}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Rotation Period</span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diameter</span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
};