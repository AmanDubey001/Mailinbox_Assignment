import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ReplayIcon from "@mui/icons-material/Replay";
import { ThemeContext } from "../App";
import SearchIcon from "@mui/icons-material/Search";
import CircleIcon from "@mui/icons-material/Circle";
import TelegramIcon from "@mui/icons-material/Telegram";
import ReplyIcon from "@mui/icons-material/Reply";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ImageIcon from "@mui/icons-material/Image";
import SpellcheckIcon from "@mui/icons-material/Spellcheck";
import AttachmentIcon from "@mui/icons-material/Attachment";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import PersonIcon from "@mui/icons-material/Person";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import HighlightOffIcon from "@mui/icons-material/Close";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import axios from "axios";
import ldashboard from "../assets/ldashboard.png";

const MailSection = () => {
  const { theme } = useContext(ThemeContext);
  const [selectedId, setSelectedId] = useState(1);
  const [open, setOpen] = useState(false);
  const onClose = () => setOpen(false);

  useEffect(() => {
    const apiUrl = "https://hiring.reachinbox.xyz/onebox/list";
    const token = localStorage.getItem("token");

    // Set the headers with the token
    const headers = {
      Authorization: `bearer:${token}`,
    };

    // Make a GET request with the headers
    axios
      .get(apiUrl, { headers })
      .then((response) => {
      })
      .catch((error) => {
      });
  }, []);

  const colors = function (status) {
    if (status === "Intreasted") return "#57E0A6";
    else if (status === "Closed") return "#626FE6";
    else if (status === "Meeting Booked") return "#9C62E6";
    else if (status === "Meeting Completed") return "#E6D162";
  };
  const Card = ({ item }) => {
    const { status, mail, id } = item;
    const finalColor = colors(status);
    return (
      <>
        <Box
          onClick={() => setSelectedId(id)}
          mt={2}
          px={1}
          sx={{
            display: "flex",
            flexDirection: "column",
            borderLeft: selectedId === id ? "4px solid #4285F4" : "0px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="body"
              sx={{
                fontSize: "14px",
                fontWeight: 600,
                color: theme.palette.color,
              }}
            >
              <CircleIcon
                sx={{
                  display: "inline-block",
                  verticalAlign: "middle",
                  fontSize: "10px",
                  color: status === "Intreasted" ? "#4285F4" : "transparent",
                }}
              />{" "}
              {mail}
            </Typography>
            <Typography
              variant="body"
              sx={{ fontSize: "14px", fontWeight: 600, color: "grey" }}
            >
              MAR 7
            </Typography>
          </Box>
          <Typography
            mt={1}
            variant="body"
            sx={{ fontSize: "13px", fontWeight: 600, color: "grey" }}
          >
            I have tried a lot
          </Typography>
          <Box>
            <Box
              mt={2}
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "space-around",
              }}
            >
              <Typography
                variant="body"
                sx={{
                  fontSize: "10px",
                  fontWeight: 600,
                  color: finalColor,
                  padding: "2px",
                  paddingInline: "12px",
                  background:
                    theme?.palette?.mode === "dark" ? "#222426" : "#F0F0F0",
                  borderRadius: "10px",
                }}
              >
                {" "}
                <CircleIcon
                  sx={{
                    display: "inline-block",
                    verticalAlign: "middle",
                    fontSize: "8px",
                  }}
                />
                {"   "}
                {status}
              </Typography>
              <Typography
                variant="body"
                sx={{
                  fontSize: "10px",
                  fontWeight: 600,
                  color: theme.palette.color,
                  padding: "2px",
                  paddingInline: "12px",
                  background:
                    theme?.palette?.mode === "dark" ? "#222426" : "#F0F0F0",
                  borderRadius: "10px",
                }}
              >
                {" "}
                <TelegramIcon
                  sx={{
                    display: "inline-block",
                    verticalAlign: "middle",
                    color: "grey",
                    fontSize: "16px",
                  }}
                />
                {"  "}Campign Name
              </Typography>
            </Box>

            <Divider
              color="primary"
              sx={{ background: "grey", marginTop: "10px" }}
              orientation="horizontal"
            />
          </Box>
        </Box>
      </>
    );
  };

  const MailCard = () => {
    return (
      <Box
        sx={{
          width: "92%",
          marginInline: "auto",
          overflowX: "hidden",
          background: theme.palette.mode === "dark" ? "transparent" : "#F0F0F0",
        }}
      >
        <Box
          sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
        >
          <Divider
            color="primary"
            sx={{ background: "grey", flexGrow: 1, marginTop: "10px" }}
            orientation="horizontal"
          />
          <Typography
            px={1}
            py={0.5}
            variant="body1"
            style={{
              margin: "0 16px",
              border: "1px solid grey",
              background: theme.palette.background,
              borderRadius: "5px ",
            }}
          >
            {"Today"}
          </Typography>
          <Divider
            color="primary"
            sx={{ background: "grey", flexGrow: 1, marginTop: "10px" }}
            orientation="horizontal"
          />
        </Box>
        <Box
          m={2}
          p={2}
          sx={{
            background: theme.palette.background,
            border: "1px solid grey",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              my={2}
              variant="body"
              sx={{ color: theme.palette.color, fontWeight: 600 }}
            >
              New Produt launch
            </Typography>
            <Typography my={2} variant="body" sx={{ color: "grey" }}>
              20 june 2022 : 9:16AM
            </Typography>
          </Box>
          <Typography my={2} variant="body" sx={{ color: "grey" }}>
            from : jeanne@icloud.com cc : lennon.j@mail.com
          </Typography>
          <Typography mb={2} variant="body" sx={{ color: "grey" }}>
            to : lennon.j@mail.com
          </Typography>
          <Typography mt={4}>
            Hi {"FIRST_NAME "},
            <Typography mt={2}>
              {" "}
              I would like to introduce you to SaaSgrow, a productized design
              service specifically tailored for saas startups. Our aim is to
              help you enhance the user experience and boost the visual appeal
              of your software products.
            </Typography>
          </Typography>
        </Box>
      </Box>
    );
  };
  const finalColors = colors(DATA[selectedId - 1]?.status);

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Grid
      container
      md={12}
      p={1}
      sx={{
        display: "flex",
        width: "100%",
        minHeight: "90%",
        overflowX: "hidden",
      }}
    >
      <Grid item md={3} px={2} sx={{ maxHeight: "83vh", overflowY: "auto" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="body"
            sx={{ fontSize: "20px", fontWeight: 700, color: "#4285F4" }}
          >
            All inbox(s){" "}
            <KeyboardArrowDownIcon
              sx={{ display: "inline-block", verticalAlign: "middle" }}
              size="12"
            />
          </Typography>
          <IconButton
            sx={{
              color: theme.palette.color,
              fontSize: "5px",
              background: theme.palette.background,
            }}
          >
            <ReplayIcon />
          </IconButton>
        </Box>
        <Typography
          variant="body"
          sx={{
            fontSize: "0.8rem",
            fontWeight: 700,
            color: theme.palette.color,
          }}
        >
          {" "}
          25/25{" "}
          <span style={{ color: "grey", fontSize: "12px" }}>
            Inboxes selected
          </span>
        </Typography>
        <TextField
          type="text"
          sx={{
            marginTop: "1rem",
            minHeight: "20px",
            padding: 0.5,
            background:
              theme.palette.mode === "dark"
                ? theme.palette.background
                : "#F0F0F0",
            width: "100%",
          }}
          autoFocus={false}
          size="small"
          variant="standard"
          placeholder="Search"
          InputProps={{
            startAdornment: (
              <InputAdornment
                position="start"
                sx={{ color: theme.palette.color }}
              >
                <SearchIcon />
              </InputAdornment>
            ),
            disableUnderline: true,
            style: { color: theme.palette.color },
          }}
        />
        <Box
          mt={2}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="body"
            sx={{
              fontSize: "14px",
              fontWeight: 600,
              color: theme.palette.color,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              verticalAlign: "middle",
            }}
          >
            <Typography
              sx={{
                color: "#4285F4",
                verticalAlign: "middle",
                padding: "3px",
                background: theme.palette.background,
                borderRadius: "8px",
              }}
            >
              {" "}
              26
            </Typography>{" "}
            New Replies{" "}
          </Typography>

          <Typography
            variant="body"
            sx={{
              fontSize: "14px",
              fontWeight: 600,
              color: theme.palette.color,
            }}
          >
            Newest{" "}
            <KeyboardArrowDownIcon
              sx={{ display: "inline-block", verticalAlign: "middle" }}
              size="12"
            />
          </Typography>
        </Box>
        <Divider
          color="primary"
          sx={{ background: "grey", marginTop: "10px" }}
          orientation="horizontal"
        />
        {DATA?.map((item) => {
          return (
            <>
              <Card item={item} />
            </>
          );
        })}
      </Grid>

      <Grid
        item
        md={6}
        sx={{
          width: "100%",
          maxHeight: "86vh",
          overflowY: "auto",
          borderLeft: "1px solid grey",
        }}
      >
        <Box
          px={3}
          pt={2}
          pb={3}
          sx={{
            background: theme.palette.mode === "light" ? "white" : "black",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center ",
            width: "92%",
            maxHeight: "2vh",
            boxShadow: "0 3px 5px -3px grey",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              variant="body"
              sx={{
                fontSize: "16px",
                fontWeight: 600,
                color: theme.palette.color,
              }}
            >
              {" "}
              {DATA[selectedId - 1]?.name}
            </Typography>
            <Typography
              mt={1}
              variant="body"
              sx={{ fontSize: "12px", fontWeight: 600, color: "grey" }}
            >
              {" "}
              {DATA[selectedId - 1]?.mail}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: "1rem" }}>
            <Typography
              sx={{
                border: "1px solid grey",
                borderRadius: "5px",
                padding: "5px 10px",
                background: theme.palette.background,
              }}
            >
              <CircleIcon
                sx={{
                  display: "inline-block",
                  verticalAlign: "middle",
                  fontSize: "12px",
                  color: finalColors,
                }}
              />
              {"       "}
              {DATA[selectedId - 1]?.status}{" "}
              <KeyboardArrowDownIcon
                sx={{ display: "inline-block", verticalAlign: "middle" }}
                size="12"
              />
            </Typography>
            <Typography
              sx={{
                border: "1px solid grey",
                borderRadius: "5px",
                padding: "5px 10px",
                background: theme.palette.background,
              }}
            >
              {"  "}Move
              <KeyboardArrowDownIcon
                sx={{ display: "inline-block", verticalAlign: "middle" }}
                size="12"
              />
            </Typography>
            <Typography
              sx={{
                border: "1px solid grey",
                borderRadius: "5px",
                padding: "5px 10px",
                background: theme.palette.background,
              }}
            >
              {"  "}...
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            background:
              theme.palette.mode === "dark" ? "transparent" : "#F0F0F0",
            width: "100%",
          }}
        >
          <MailCard />
          <MailCard />
          <MailCard />

          <button
            style={{
              padding: "1rem 3rem",
              marginLeft: "2.5rem",
              backgroundImage:
                " linear-gradient(to right, #4B63DD 100%, #0524BF 99%)",
              border: "0px",
              color: "#fff",
              fontSize: "1rem",
              fontWeight: 600,
              borderRadius: "5px",
            }}
            onClick={() => setOpen(true)}
          >
            {" "}
            <ReplyIcon
              sx={{ display: "inline-block", verticalAlign: "middle" }}
              size="12"
            />
            Reply
          </button>
        </Box>
        <Dialog
          open={open}
          onClose={onClose}
          fullWidth
          PaperProps={{
            sx: {
              borderRadius: "8px 8px 0 0", // Adjust border radius as needed
              margin: "auto",
              position: "absolute",
              maxHeight: "90vh", // Set max height if needed
              bottom: 40,
              width: "90%",
              // minWidth: "200px",
              // overflowY:"scroll",
              background: theme.palette.mode === "dark" ? "black" : "white",
            },
          }}
        >
          <DialogTitle
            sx={{
              background: theme.palette.background,
              color: "grey",
              width: "92%",
            }}
          >
            Reply
            <IconButton
              aria-label="close"
              onClick={onClose}
              sx={{
                position: "absolute",
                right: 0,
                color: theme.palette.color,
                top: 8,
              }}
            >
              <HighlightOffIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent sx={{ width: "90%", overflowY: "scrroll" }}>
            <TextField
              type="text"
              sx={{
                marginTop: "1rem",
                border: "0px",
                minHeight: "20px",
                width: "100%",
                background: theme.palette.mode === "dark" ? "black" : "#F0F0F0",
              }}
              autoFocus={false}
              size="small"
              variant="standard"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start" sx={{ color: "white" }}>
                    <p style={{ color: "grey" }}>To:</p>
                  </InputAdornment>
                ),
                disableUnderline: true,
                style: { color: theme.palette.color },
              }}
            />
            <Divider
              color="primary"
              sx={{ background: "grey", marginTop: "0px" }}
              orientation="horizontal"
            />

            <TextField
              type="text"
              variant="standard"
              sx={{
                marginTop: "1rem",
                border: "0px",
                minHeight: "20px",
                width: "100%",
                background: theme.palette.mode === "dark" ? "black" : "#F0F0F0",
              }}
              autoFocus={false}
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start" sx={{ color: "white" }}>
                    <p style={{ color: "grey" }}>From:</p>
                  </InputAdornment>
                ),
                disableUnderline: true,
                style: { color: theme.palette.color },
              }}
            />
            <Divider
              color="primary"
              sx={{ background: "grey", marginTop: "0px" }}
              orientation="horizontal"
            />

            <TextField
              type="text"
              variant="standard"
              sx={{
                marginTop: "1rem",
                border: "0px",
                minHeight: "20px",
                width: "100%",
                background: theme.palette.mode === "dark" ? "black" : "#F0F0F0",
              }}
              autoFocus={false}
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start" sx={{ color: "white" }}>
                    <p style={{ color: "grey" }}>Subject:</p>
                  </InputAdornment>
                ),
                disableUnderline: true,
                style: { color: theme.palette.color },
              }}
            />
            <Divider
              color="primary"
              sx={{ background: "grey", marginTop: "0px" }}
              orientation="horizontal"
            />

            <TextField
              type="text"
              variant="standard"
              sx={{
                marginTop: "1rem",
                border: "0px",
                minHeight: "20px",
                width: "100%",
                background: theme.palette.mode === "dark" ? "black" : "#F0F0F0",
              }}
              autoFocus={false}
              fullWidth
              placeholder="Hi Jeanne,"
              multiline
              rows={6}
              InputProps={{
                disableUnderline: true,
                style: { color: theme.palette.color },
              }}
            />
            <Divider
              color="primary"
              sx={{ background: "grey", marginTop: "0px" }}
              orientation="horizontal"
            />

            <Box
              mt={2}
              sx={{ display: "flex", wdth: "90%", overflowX: "hidden" }}
            >
              <button
                style={{
                  padding: "10px",
                  backgroundImage:
                    " linear-gradient(to right, #4B63DD 100%, #0524BF 99%)",
                  border: "0px",
                  color: theme.palette.color,
                  fontSize: "1rem",
                  fontWeight: 600,
                  borderRadius: "5px",
                }}
                onClick={() => setOpen(true)}
              >
                {" "}
                Send
                <KeyboardArrowDownIcon
                  sx={{ display: "inline-block", verticalAlign: "middle" }}
                  size="12"
                />
              </button>
              <IconButton sx={{ color: "grey" }}>
                <ElectricBoltIcon />{" "}
                <p style={{ fontSize: "1rem" }}>Variables</p>
              </IconButton>
              <IconButton sx={{ color: "grey" }}>
                <VisibilityIcon />{" "}
                <p style={{ fontSize: "1rem" }}>Preview Email</p>
              </IconButton>
              <IconButton sx={{ color: "grey" }}>
                <SpellcheckIcon />
              </IconButton>
              <IconButton sx={{ color: "grey" }}>
                <AttachmentIcon />
              </IconButton>
              <IconButton sx={{ color: "grey" }}>
                <ImageIcon />
              </IconButton>
              <IconButton sx={{ color: "grey" }}>
                <SentimentSatisfiedAltIcon />
              </IconButton>
              <IconButton sx={{ color: "grey" }}>
                <PersonIcon />
              </IconButton>
              {/* <IconButton sx={{ color: "grey" }}>
                                <ChevronLeftIcon />    <ChevronLeftIcon />

                            </IconButton> */}
            </Box>
          </DialogContent>
        </Dialog>
      </Grid>

      <Grid
        item
        md={3}
        pl={2}
        sx={{
          width: "92%",
          overflowY: "auto",
          maxHeight: "85vh",
          overflowY: "auto",
          overflowX: "hidden",
          borderLeft: "1px solid grey",
        }}
      >
        <Box mt={2} sx={{ width: "92%" }}>
          <Typography
            sx={{
              background:
                theme?.palette?.mode === "dark" ? "#222426" : "#F0F0F0",
              padding: "0.5rem 1.5rem",
              fontWeight: 700,
              borderRadius: "10px",
            }}
          >
            Lead Details
          </Typography>
          <Box pl={2} sx={{ textAlign: "center" }}>
            <Box
              mt={2}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Typography
                sx={{ color: theme.palette.color, whiteSpace: "no-wrap" }}
              >
                Name
              </Typography>
              <Typography sx={{ color: "grey" }}>
                {DATA[selectedId - 1]?.name}
              </Typography>
            </Box>
            <Box
              mt={2}
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Typography
                sx={{ color: theme.palette.color, whiteSpace: "no-wrap" }}
              >
                Contact No
              </Typography>
              <Typography sx={{ color: "grey" }}>
                {DATA[selectedId - 1]?.phone}
              </Typography>
            </Box>
            <Box
              mt={2}
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Typography
                sx={{ color: theme.palette.color, whiteSpace: "no-wrap" }}
              >
                Email Id
              </Typography>
              <Typography sx={{ color: "grey" }}>
                {DATA[selectedId - 1]?.mail}
              </Typography>
            </Box>
            <Box
              mt={2}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                whiteSpace: "no-wrap",
              }}
            >
              <Typography
                sx={{ color: theme.palette.color, whiteSpace: "no-wrap" }}
              >
                LinkedIn
              </Typography>
              <Typography sx={{ color: "grey" }}>
                {DATA[selectedId - 1]?.linkedIn}
              </Typography>
            </Box>
            <Box
              mt={2}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                whiteSpace: "no-wrap",
              }}
            >
              <Typography
                sx={{ color: theme.palette.color, whiteSpace: "no-wrap" }}
              >
                Company Name
              </Typography>
              <Typography sx={{ color: "grey" }}>
                {DATA[selectedId - 1]?.company}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box
          mt={6}
          sx={{
            width: "94%",
          }}
        >
          <Typography
            sx={{
              background:
                theme?.palette?.mode === "dark" ? "#222426" : "#F0F0F0",
              padding: "0.5rem 1.5rem",
              fontWeight: 700,
              borderRadius: "10px",
            }}
          >
            Activities
          </Typography>

          <Box mt={4} sx={{ textAlign: "center" }}>
            <Typography sx={{ color: theme.palette.color, fontWeight: 700 }}>
              Campaign Name
            </Typography>
          </Box>

          <Box mt={4} sx={{ justifyContent: "center", display: "flex" }}>
            <Typography
              pr={1}
              sx={{ color: theme.palette.color, fontWeight: 700 }}
            >
              3 <span style={{ fontWeight: 400 }}>Steps</span>
            </Typography>
            <Typography
              pl={1}
              sx={{
                color: theme.palette.color,
                fontWeight: 700,
                borderLeft: "1px solid grey",
              }}
            >
              5 <span style={{ fontWeight: 400 }}>Days in Sequence</span>
            </Typography>
          </Box>

          <Box
            mt={2}
            mr={5}
            sx={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Stepper
              sx={{
                "& .css-i4bv87-MuiSvgIcon-root": {
                  border: "1px solid grey",
                  padding: "10px",
                  borderRadius: "30px",
                  background:
                    theme.palette.mode === "dark" ? "#222426" : "#F0F0F0",
                },
                " & .css-1pe7n21-MuiStepConnector-root": {
                  marginLeft: "23px",
                },
              }}
              activeStep={activeStep}
              orientation="vertical"
            >
              <Step>
                <StepLabel StepIconComponent={MailOutlineRoundedIcon}>
                  <Typography px={2} mt={1} sx={{ color: theme.palette.color }}>
                    Step 1 : Email{" "}
                    <Typography sx={{ color: theme.palette.color }}>
                      {" "}
                      <TelegramIcon
                        sx={{
                          display: "inline-block",
                          verticalAlign: "middle",
                          color: "grey",
                          fontSize: "16px",
                        }}
                      />
                      {"  "}Sent <span style={{ color: "grey" }}>3m 2s</span>
                    </Typography>
                  </Typography>
                </StepLabel>
              </Step>
              <Step>
                <StepLabel StepIconComponent={MailOutlineRoundedIcon}>
                  <Typography px={2} mt={1} sx={{ color: theme.palette.color }}>
                    Step 2 : Email{" "}
                    <Typography sx={{ color: theme.palette.color }}>
                      {" "}
                      <TelegramIcon
                        sx={{
                          display: "inline-block",
                          verticalAlign: "middle",
                          color: "grey",
                          fontSize: "16px",
                        }}
                      />
                      {"  "}Sent <span style={{ color: "grey" }}>3m 2s</span>
                    </Typography>
                  </Typography>
                </StepLabel>
              </Step>
              <Step>
                <StepLabel StepIconComponent={MailOutlineRoundedIcon}>
                  <Typography px={2} mt={1} sx={{ color: theme.palette.color }}>
                    Step 2 : Email{" "}
                    <Typography sx={{ color: theme.palette.color }}>
                      {" "}
                      <TelegramIcon
                        sx={{
                          display: "inline-block",
                          verticalAlign: "middle",
                          color: "grey",
                          fontSize: "16px",
                        }}
                      />
                      {"  "}Sent <span style={{ color: "grey" }}>3m 2s</span>
                    </Typography>
                  </Typography>
                </StepLabel>
              </Step>
            </Stepper>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

const DATA = [
  {
    id: 1,
    mail: "Beata@gmail.com",
    status: "Intreasted",
    name: "Beate",
    company: "ReachInbox",
    phone: "+54-9062827869",
    linkedIn: "linkedin.com/in/",
  },
  {
    id: 2,
    mail: "Sanya@gmail.com",
    status: "Closed",
    name: "Sanya",
    company: "ReachInbox",
    phone: "+54-9062827869",
    linkedIn: "linkedin.com/in/",
  },
  {
    id: 3,
    mail: "William@gmail.com",
    status: "Intreasted",
    name: "William",
    company: "ReachInbox",
    phone: "+54-9062827869",
    linkedIn: "linkedin.com/in/",
  },
  {
    id: 4,
    mail: "Orlando@gmail.com",
    status: "Meeting Booked",
    name: "Orlando",
    company: "ReachInbox",
    phone: "+54-9062827869",
    linkedIn: "linkedin.com/in/",
  },
  {
    id: 5,
    mail: "Orlando@gmail.com",
    status: "Meeting Completed",
    name: "Orlando",
    company: "ReachInbox",
    phone: "+54-9062827869",
    linkedIn: "linkedin.com/in/",
  },
  {
    id: 6,
    mail: "Beata@gmail.com",
    status: "Intreasted",
    name: "Beate",
    company: "ReachInbox",
    phone: "+54-9062827869",
    linkedIn: "linkedin.com/in/",
  },
  {
    id: 7,
    mail: "Sanya@gmail.com",
    status: "Closed",
    name: "Sanya",
    company: "ReachInbox",
    phone: "+54-9062827869",
    linkedIn: "linkedin.com/in/",
  },
  {
    id: 8,
    mail: "William@gmail.com",
    status: "Intreasted",
    name: "William",
    company: "ReachInbox",
    phone: "+54-9062827869",
    linkedIn: "linkedin.com/in/",
  },
  {
    id: 9,
    mail: "Orlando@gmail.com",
    status: "Meeting Completed",
    name: "Orlando",
    company: "ReachInbox",
    phone: "+54-9062827869",
    linkedIn: "linkedin.com/in/",
  },
];

export default MailSection;
