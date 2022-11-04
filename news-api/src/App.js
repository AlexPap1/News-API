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
            <div className="results" id="results">
            </div>
          </div>
        </div>
        <Footer />
    </div>
  );
}

export default App;
