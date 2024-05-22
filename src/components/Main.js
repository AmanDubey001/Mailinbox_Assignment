import { useTheme } from "@mui/material/styles";
import React, { useContext, useEffect } from "react";
import mainlogo from "../assets/main_logo.png";
import google from "../assets/google.png";
import { Box, Button, Typography } from "@mui/material";
import { useLocation, useRouter } from "react-router-dom";
import axios from "axios";
import { ThemeContext } from "../App";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname, search } = location;
  const queryParams = new URLSearchParams(search);

  useEffect(() => {
    if (queryParams.get("token")) {
      localStorage.setItem("token", queryParams.get("token"));
      window.location.href = `${window.location.origin}/dashboard`;
    }
  }, [queryParams]);


  const handleLogin = () => {
    fetch(
      `https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=${window.location.origin}`,
      {
        redirect: "manual",
        credentials: "same-origin",
      }
    ).then((res) => {
      if (res.type === "opaqueredirect") {
        // redirect to login page
        window.location.href = res.url;
      } else {
        // handle normally / pass on to next handler
      }
    });

    //   return navigate("/dashboard")
  };

  return (
    <div>
      <Box>
        <div
          style={{
            textAlign: "center",
            paddingTop: "20px",
            paddingBottom: "20px",
            overflowY: "hidden",
            minHeight: "2vh",
            boxShadow: "0 3px 5px -3px #000",
          }}
        >
          <img src={mainlogo} />
        </div>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "90vh",
          }}
        >
          <Box
            sx={{
              width: "35%",
              background: "#111214",
              display: "flex",
              textAlign: "center",
              padding: "40px",
            }}
          >
            <Box sx={{ width: "100%", textAlign: "center" }}>
              <Typography variant="h6">Create a new Account</Typography>
              <Box mt={3}>
                <Button
                  onClick={handleLogin}
                  sx={{
                    border: "1px solid white",
                    padding: "0.5em 6em 0.5em 6em",
                  }}
                >
                  <img src={google} width="18px" />
                  <span
                    style={{
                      marginLeft: "10px",
                      color: "white",
                      textTransform: "none",
                    }}
                  >
                    Sign Up with Google
                  </span>
                </Button>
              </Box>
              <Box mt={5}>
                <button
                  style={{
                    border: "0px",
                    backgroundImage:
                      "linear-gradient(to bottom, #4B63DD 0%, #0524BF 100%",
                    padding: "0.5em 5em 0.5em 5em",
                    color: theme.palette.color,
                  }}
                  l
                >
                  Create an Account
                </button>
              </Box>
              <Box mt={2}>
                <Typography variant="body" color="grey">
                  Already have an Account? Sign In
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Main;
