import React from 'react';
import '../App.css';

const Header = () => {
    return (
        <header>
            <div className="header">
                <h1>Your News Today!</h1>
                <div className="search-area">
                    <input className="search" placeholder="Search for News" size="30"></input>
                    <button className="btn" type="button">
                        Search
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;

//ADD SORT