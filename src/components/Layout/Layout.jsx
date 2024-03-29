import NavBar from "../navbar/NavBar";
import { useState } from "react";
import {
  createTheme,
  Box,
  Typography,
  ThemeProvider,
  Grid,
} from "@mui/material";
import Switch from "@mui/material/Switch";
import banner from "../../assets/banner.png";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = ({ children }) => {
  const mode = "light";

  const [isDark, setIsDark] = useState(false);

  const theme = createTheme({
    palette: {
      mode,
      ...(isDark
        ? /*Dark Mode*/

          {
            primary: {
              main: "#323235",
            },
            secondary: {
              main: "#3D3D3D",
            },
            text: {
              disabled: "white",
            },
            background: {
              default: "#4D4D4D",
            },
            info: {
              main: "#B2935B",
              dark: "#59492D",
            },
          }
        : /* Ligth Mode */
          {
            primary: {
              main: "#90603C",
            },
            secondary: {
              main: "#C6B799",
            },
            text: {
              primary: "#90603C",
              disabled: "black",
            },
            background: {
              default: "#E5DAC3",
            },
            info: {
              main: "#B2935B",
              dark: "#59492D",
            },
          }),
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavBar />
        <Box sx={{ marginTop: 2, marginX: "auto" }}>
          <Typography margin={10} color="text.disabled">
            {" "}
            Dark Mode
            <Switch onChange={() => setIsDark(!isDark)} color="error" />
          </Typography>
          <Grid marginTop={15} container justifyContent="center">
            <Grid item>
              <img className="img" src={banner} alt="imagen banner" />
            </Grid>
          </Grid>

          {children}
        </Box>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </ThemeProvider>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default Layout;
