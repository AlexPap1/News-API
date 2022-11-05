import React from 'react';
import '../App.css';

const Header = () => {
    return (
        <header>
            <div className="header">
                <h1>Your News Today!</h1>
                <div className="search-area">
                    <input id="searchArea" className="search" placeholder="Search for News" size="30"></input>
                    <button className="btn" type="submit" id="searchButton" onClick={searchResults}>
                        Search
                    </button>
                    <button className="btn" type="submit" id="sortButton" onClick={sortResults}>
                        Sort By New
                    </button>
                </div>
            </div>
        </header>
    )
}

function sortResults() {
    const results = document.getElementById("results");
    results.innerHTML = "";
    document.getElementById("searchArea")
    .addEventListener("keyup", function (e) {
        if (e.keyCode === 13) {
            document.getElementById("searchButton").click();
        }
    });
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = mm + '-' + dd + '-' + yyyy;
    console.log(today);
    var searchArea = document.getElementById("searchArea").value.replace(/\s/g, '_');
    let api = `https://newsapi.org/v2/everything?q=` + searchArea + `&from=` + today + `&sortBy=publishedAt&apiKey=05f61c9469e447c89bbbd7f32ef76055`
    console.log(api);
    fetch(api).then((response) => {
        response.json().then((data) => {
            console.log(data);
            //displays15 articles
            for(var i = 0; i < 15; i++) {
                results.innerHTML += "<div style = 'border: 3px solid white; margin: 10px'> <h2 style = 'padding-left: 10px; padding-right: 10px;'> "+data.articles[i].title+" </h2> <p style = 'font-size: 20px; padding-left: 10px; padding-right: 10px;'> "+data.articles[i].description+" <p> <br> <a target=_blank rel=noopener noreferrer href = "+data.articles[i].url+"> <img style = 'width: 300px; padding-left: 10px' src="+data.articles[i].urlToImage+" </img> </a> </div>";
            }
        })
    })
}


function searchResults() {
    const results = document.getElementById("results");
    results.innerHTML = "";
    document.getElementById("searchArea")
    .addEventListener("keyup", function (e) {
        if (e.keyCode === 13) {
            document.getElementById("searchButton").click();
        }
    });
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = mm + '-' + dd + '-' + yyyy;
    console.log(today);
    var searchArea = document.getElementById("searchArea").value.replace(/\s/g, '_');
    let api = `https://newsapi.org/v2/everything?q=` + searchArea + `&from=` + today + `&sortBy=relevancy&apiKey=05f61c9469e447c89bbbd7f32ef76055`
    console.log(api);
    fetch(api).then((response) => {
        response.json().then((data) => {
            console.log(data);
            //displays15 articles
            for(var i = 0; i < 15; i++) {
                results.innerHTML += "<div style = 'border: 3px solid white; margin: 10px'> <h2 style = 'padding-left: 10px'> "+data.articles[i].title+" </h2> <p style = 'font-size: 20px; padding-left: 10px'> "+data.articles[i].description+" <p> <br> <a target=_blank rel=noopener noreferrer href = "+data.articles[i].url+"> <img style = 'width: 300px; padding-left: 10px' src="+data.articles[i].urlToImage+" </img> </a> </div>";
            }
        })
    })
}


export default Header;
