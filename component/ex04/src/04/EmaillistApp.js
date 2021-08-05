import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Eamillist from './Emaillist';
import data from './assets/json/data.json';

export default function () {

    const [emails] = useState(data);

    return (
        <div className={ 'EmaillistApp' }>
            <SearchBar />
            <Eamillist emails={ emails }/>
        </div>
    );
}