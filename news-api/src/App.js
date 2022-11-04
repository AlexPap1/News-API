import './App.css';
import Footer from './compotnents/footer';
import Popular from './compotnents/popular';
import Header from './compotnents/header';
import searchResults from './compotnents/header';

function App() {
  return (
    <div>
        <Header />
        <div className="body">
          <div className = "sidebar">
            <Popular />
          </div>
          <div classname = "search">
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
          </div>
        </div>
        <Footer />
    </div>
  );
}

export default App;
