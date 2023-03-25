import './App.css';
import React, { useState } from 'react';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Results from "./components/results/results";
import Search from "./components/search/search";
import SwitchForm from './components/switchform';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
      <SwitchForm onLogin={handleLogin} />
      {!isLoggedIn && <Footer />}
      {isLoggedIn && (
        <>
          <Header />
          <Search />
          <Results />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
