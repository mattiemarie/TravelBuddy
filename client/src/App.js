import './App.css';
import React, { useState } from 'react';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Results from "./components/results/results";
import Search from "./components/search/search";
import Onboarding from './components/onboarding';

function App({children}) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div 
      style={
        {
          minHeight:"100vh",
          display:"flex",
          flexDirection:"column",
          justifyContent:"space-between",
          alignItems:"center",
        }
      }>
        

          <Header />
          {children}
          <Footer />
       
   </div>
  ); 
  
}

export default App;
