import React, { useState} from 'react';
import PropTypes from 'prop-types'

export default function SearchBar( {callback, keyword} ) {
    
    console.log('rendering.... SearchBar');

    const handleChange = function (e) {
        console.log(e.target.value);
        callback(e.target.value);
        
    }

    return (
        <div className={ 'Searchbar' }>
            찾기: <input 
            type='text' 
            placeholder='search'
            value={keyword} 
            onChange={ handleChange } />
        </div>
    )
}

SearchBar.propTypes = {
    keyword: PropTypes.string.isRequired,
    callback: PropTypes.func.isRequired
}

