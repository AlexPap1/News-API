//api key = 05f61c9469e447c89bbbd7f32ef76055
const search = document.getElementById('search')

function searchResults(search) {
    console.log(search);
    let api = `https://newsapi.org/v2/everything?q=` + search + `&from=2022-11-03&sortBy=popularity&apiKey=05f61c9469e447c89bbbd7f32ef76055`
    fetch(api).then((res) => {
        
    })
}


// export const searchNews = (search) => {
//     console.log(search);
//     return fetch(`https://newsapi.org/v2/everything?q=` + search + `&from=2022-11-03&sortBy=popularity&apiKey=05f61c9469e447c89bbbd7f32ef76055`);
// }

// export const headlines = (query) => {
//     return fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=05f61c9469e447c89bbbd7f32ef76055`);
// }