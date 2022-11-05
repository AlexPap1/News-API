import './App.css';
import Footer from './compotnents/footer';
import Popular from './compotnents/popular';
import Header from './compotnents/header';
import React, { useState } from 'react';
import FunctionContextComponent from './compotnents/results';
//import searchResults from './compotnents/header';

export const themeContext = React.createContext();

function App() {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme(prevDarkTheme => !prevDarkTheme);
  }


  return (
    <div>
        <Header />
        <themeContext.Provider value={darkTheme}>
        <div className="body" id="body">
          <div className = "sidebar">
            <Popular />
          </div>
          <div classname = "search">
            <button onClick={toggleTheme} className="toggleButton">Toggle Theme</button>
              <FunctionContextComponent />
          </div>
        </div>
        </themeContext.Provider>
        <Footer />
    </div>
  );
}

export default App;
