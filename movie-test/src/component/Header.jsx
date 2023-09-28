import React from 'react'

import '@/app/globals.css'
import { BiSearch } from 'react-icons/bi';

const Header = () => {
    return (
        <div className='header'>
            <div>Rotten Tomatoes</div>
            <div className='headerSearch'>
                <input className='searchText' placeholder='Search' type="search" name="" id="" pattern="[A-Za-z0-9]{4,20}" />
                <BiSearch size={20} />
            </div>
        </div>
    )
}

export default Header