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

import "./App.css";
import axios from "axios";
import Stripe from "react-stripe-checkout";
import FaceIcon from "@mui/icons-material/Face";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";
import { Chip, Switch, createTheme, ThemeProvider } from "@material-ui/core";
import { useState } from "react";
import Login from "./components/login.js";
import Signup from "./components/signup.js";

const theme = createTheme({
  palette: {
    primary: {
      main: "#5ce1e6",
    },
  },
});

function App() {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleToken = async (totalAmount, token) => {
    try {
      await axios.post("http://localhost:5000/api/stripe/pay", {
        token: token.id,
        amount: totalAmount,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const tokenHandler = (token) => {
    handleToken(100, token);
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
