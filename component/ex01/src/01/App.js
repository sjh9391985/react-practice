import React, { Component} from 'react';
import FoodList from './FoodList';

export default class extends Component{
    render() {
        return (
            <div id='App'>
                <FoodList />
            </div>
        );
    }
}