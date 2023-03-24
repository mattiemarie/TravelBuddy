import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import Stripe from "react-stripe-checkout";
import FaceIcon from "@mui/icons-material/Face";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";
import { Chip, createTheme, ThemeProvider } from "@material-ui/core";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Results from "./components/results";
import Search from "./components/search";
import Login from "./components/login"
import Signup from "./components/signup"

const theme = createTheme({
  palette: {
    primary: {
      main: "#5CE1E6",
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
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <div className="content">
          <div className="switch">
            <Chip
              icon={<FaceIcon />}
              label="Sign Up"
              variant={checked ? "outlined" : "default"}
              onClick={() => setChecked(false)}
              color="primary"
            />
            <Chip
              icon={<AirplaneTicketIcon />}
              label="Log In"
              variant={!checked ? "outlined" : "default"}
              onClick={() => setChecked(true)}
              color="primary"
            />
          </div>
          <div className="form">
            {checked ? <Login /> : <Signup />}
            <Stripe
              stripeKey="pk_test_51MoEUBCz1yPpO1ySXVz3gVGj2k74rjulGiAvufURKF7mSAfOktoAbRyxJZkO3J5PAZplE1yOW4Cy2dFPucPtUcD200QWpikMJH"
              token={tokenHandler}
              amount={100}
              name="Travel Buddy"
            />
          </div>
          <div className="search">
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Search />} />
                <Route path="/results" element={<Results />} />
              </Routes>
            </BrowserRouter>
          </div>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
