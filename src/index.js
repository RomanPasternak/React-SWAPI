
class SwapiServise {
    
    _apiBase = 'https://swapi.dev/api';
    
    async getResorse(url) {
        const res = await fetch(`${this._apiBase}${url}`);
    
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        };
    
        return await res.json();
    };
    
    async getAllPeople() {
        const res = await this.getResorse(`/people/`);
        return res.results;
    }

    getPerson(id) {
        return this.getResorse(`/people/${id}`);
    }

    async getAllPlenets() {
        const res = await this.getResorse(`/plenets/`);
        return res.results;
    }

    getPlenet(id) {
        return this.getResorse(`/plenets/${id}`);
    }

    async getAllStarship() {
        const res = await this.getResorse(`/starships/`);
        return res.results;
    }

    getStarship(id) {
        return this.getResorse(`/starships/${id}`);
    }
};

const swapi = new SwapiServise();

swapi.getAllPeople().then((people) => {
   people.forEach(element => {
       console.log(element.name);
   });
});

swapi.getPerson(3).then((el) => {
    console.log(el.name);
 });