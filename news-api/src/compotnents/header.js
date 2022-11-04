import React from 'react';
import '../App.css';

const Header = () => {
    return (
        <header>
            <div className="header">
                <h1>Your News Today!</h1>
                <div className="search-area">
                    <input id="searchArea" className="search" placeholder="Search for News" size="30"></input>
                    <button className="btn" type="button" id="searchButton" onClick={searchResults}>
                        Search
                    </button>
                </div>
            </div>
        </header>
    )
}


function searchResults() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = mm + '-' + dd + '-' + yyyy;
    console.log(today);
    var searchArea = document.getElementById("searchArea").value.replace(/\s/g, '_');
    let api = `https://newsapi.org/v2/everything?q=` + searchArea + `&from=` + today + `&sortBy=popularity&apiKey=05f61c9469e447c89bbbd7f32ef76055`
    console.log(api);
    fetch(api).then((res) => {
        let searchResults = res;
    })
}


export default Header;

//ADD SORT