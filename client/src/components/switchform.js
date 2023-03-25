import "../App.css";

import FaceIcon from "@mui/icons-material/Face";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";
import { Chip, Switch, createTheme, ThemeProvider } from "@material-ui/core";
import { useCheckedState } from "./hooks/usedCheckedState";
import Login from "./login";
import Signup from "./signup";

const theme = createTheme({
  palette: {
    primary: {
      main: "#5ce1e6",
    },
  },
});

function SwitchForm() {
  const [checked, handleChange] = useCheckedState(false);

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
            backgroundImage: 'url(".//possiblelogo2.png")',
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
              color="default"
            />
          ) : (
            <Chip
              icon={<FaceIcon />}
              label="Sign Up"
              variant="outlined"
              color="default"
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
      </div>
    </div>
  );
}

export default SwitchForm;
