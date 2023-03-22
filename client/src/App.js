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
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          width: "600px",
          padding: "10px",
          paddingBottom: "50px",
        }}
      >
        <div
          style={{
            content: '""',
            backgroundImage: 'url("../possiblelogo2.png")',
            backgroundSize: "550px 400px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            position: "absolute",
            top: -85,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
          }}
        />
        <div align="center">
          {checked ? (
            <Chip
              icon={<AirplaneTicketIcon />}
              label="Log In"
              variant="outlined"
              color="info"
            />
          ) : (
            <Chip
              icon={<FaceIcon />}
              label="Sign Up"
              variant="outlined"
              color="info"
            />
          )}
          <br />

          <ThemeProvider theme={theme}>
            <div className="App" style={{ marginTop: "20px" }}>
              <Switch
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
                color="primary"
              />
            </div>
          </ThemeProvider>
        </div>

        {checked ? <Login /> : <Signup />}
        <div style={{ marginTop: "50px" }}>
          <Stripe
            stripeKey="pk_test_51MoEUBCz1yPpO1ySXVz3gVGj2k74rjulGiAvufURKF7mSAfOktoAbRyxJZkO3J5PAZplE1yOW4Cy2dFPucPtUcD200QWpikMJH"
            token={tokenHandler}
            amount={100}
            name="Travel Buddy"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
