import "../App.css";
import React, { useState } from "react";
import FaceIcon from "@mui/icons-material/Face";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";
import { Chip, Switch, createTheme, ThemeProvider } from "@material-ui/core";
import Login from "./login";
import Signup from "./signup";

const theme = createTheme({
  palette: {
    primary: {
      main: "#5ce1e6",
    },
  },
});

function Onboarding() {
  const [mode, setMode] = useState("createAccount");
  const handleChange = () => {
    mode === "createAccount" ? setMode("login") : setMode("createAccount");
  };

  return (
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
          backgroundImage: 'url("../logo.png")',
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
        {mode === "createAccount" ? (
          <Chip
            icon={<FaceIcon />}
            label="Sign Up"
            variant="outlined"
            color="default"
          />
        ) : (
          <Chip
            icon={<AirplaneTicketIcon />}
            label="Log In"
            variant="outlined"
            color="default"
          />
        )}
        <br />
        <ThemeProvider theme={theme}>
          <div className="App" style={{ marginTop: "20px" }}>
            <Switch
              checked={mode === "login"}
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
              color="primary"
            />
          </div>
        </ThemeProvider>
        {mode === "createAccount" ? (
          <Signup onModeChange={setMode.bind(null, "login")} />
        ) : (
          <Login onModeChange={setMode.bind(null, "createAccount")} />
        )}
      </div>
    </div>
  );
}
export default Onboarding;