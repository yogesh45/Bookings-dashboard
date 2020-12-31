import React from 'react';
import SearchIcon from './Assests/Search.png';
import './SearchComponent.scss'

const SearchComponent = () => {
    return(
        <div className='search-component'>
            <div className='searchIcon'>
                <img className='img' src={SearchIcon} alt='Search Icon' />
            </div>
            <div className='border'></div>
            <div className='search-input'>
                <input type='text' placeholder='Search Keyword' />
            </div>
        </div>
    )
}

export default SearchComponent;