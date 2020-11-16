import React from 'react';
import SwapiServise from '../../services/swapi-serwice';
import Spiner from '../spiner';

import './item-list.css';

export default class ItemList extends React.Component {
    
    swapiService = new SwapiServise();

    state = {
        peopleList: null
    };

    componentDidMount() {
        this.swapiService
            .getAllPeople()
            .then((peopleList) => {
                this.setState({
                    peopleList
                });
            });
    };

    renderItems(arr) {
        return arr.map(({id, name}) =>{
            return (
                <li className="list-group-item"
                    key={id}
                    onClick={() => this.props.onItemSelected(id)}>
                    {name}
                </li>
            );
        });
    };

    render() {

        const { peopleList } = this.state;

        if (!peopleList) {
            return <Spiner />;
        }

        const items = this.renderItems(peopleList);

        return (
            <ul className="item-list list-group">
                { items }
            </ul>
        );
    };
};