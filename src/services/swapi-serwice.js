export default class SwapiServise {

    _apiBase = 'https://swapi.dev/api';

    getResorse = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        };

        return await res.json();
    };

    getAllPeople = async () => {
        const res = await this.getResorse(`/people/`);
        return res.results.map(this._transformPerson);
    }

    getPerson = async (id) => {
        const person = await this.getResorse(`/people/${id}`);
        return this._transformPerson(person);
    }

    getAllPlenets = async () => {
        const res = await this.getResorse(`/planets/`);
        return res.results.map(this._transformPlanet);
    }

    getPlenet = async (id) => {
        const planet = await this.getResorse(`/planets/${id}`);
        return this._transformPlanet(planet);
    }

    getAllStarships = async () => {
        const res = await this.getResorse(`/starships/`);
        return res.results.map(this._transformStarship);
    }

    getStarship = async (id) => {
        const starship = await this.getResorse(`/starships/${id}`);
        return this._transformStarship(starship);
    }

    _extractId = async (item) => {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    }

    _transformPlanet = (planet) => {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        };
    }

    _transformStarship = (starship) => {
        return {
            id : this._extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCresits: starship.cost_in_credits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargo_capacity
        }
    }

    _transformPerson = (person) => {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color
        }
    }
};