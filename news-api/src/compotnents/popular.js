import React from 'react';

function loadPopular() {
    let api = `https://newsapi.org/v2/top-headlines?country=us&apiKey=05f61c9469e447c89bbbd7f32ef76055`;
    fetch(api).then((response) => {
        response.json().then((data) => {
            console.log(data);
            const popularContainer = document.getElementById("popularContainer");
            for(var i = 0; i < 15; i++) {
                popularContainer.innerHTML += "<div> <h2 'font-weight = bold'> "+data.articles[i].title+" </h2> "+data.articles[i].description+" <br> <a href = "+data.articles[i].url+"> <img width = 300px; src="+data.articles[i].urlToImage+" </img> </a> </div>";
                // document.getElementById("popularContainer").innerHTML += "<div style = 'padding-top: 20px;'><img style='float:left; width: 150px;' src='"+response.articles[i].urlToImage+"'><h1"+response.articles[i].title+"</h1>"+response.articles[i].source.name+"<br>"+response.articles[i].description+" <a href='"+response.articles[i].url+"'target = '_blank'>"+response.articles[i].url+"</a></div>";
            }
        })
    })
}

window.onload = loadPopular;

const Popular = () => {
    return(
        <div id = "popularContainer">
        </div>

    );
    // data.articles.0.source.title
    // data.articles.0.source.url
  };

export default Popular;