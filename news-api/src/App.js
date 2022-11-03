import './App.css';
import './utils/API.js';
import Footer from './compotnents/footer';
import Popular from './compotnents/popular'

function App() {
  return (
    <div className="bg-warning bg-gradient">
        <h1 className="text-center container py-3">Your News Today!</h1>
        <div className="search-area">
            <input id="search" placeholder="Search for News" size="30"></input>
                <button className="btn btn-primary btn-lg" type="button" id="search-btn">
                    Search
                </button>
        </div>
        <Popular />
        <div className="results">
            <div id="search1">1</div>
            <div id="search2">2</div>
            <div id="search3">3</div>
            <div id="search4">4</div>
            <div id="search5">5</div>
            <div id="search6">6</div>
            <div id="search7">7</div>
            <div id="search8">8</div>
            <div id="search9">9</div>
            <div id="search10">10</div>
            <div id="search11">11</div>
            <div id="search12">12</div>
            <div id="search13">13</div>
            <div id="search14">14</div>
            <div id="search15">15</div>
        </div>
        <Footer />
    </div>
  );
}

export default App;
