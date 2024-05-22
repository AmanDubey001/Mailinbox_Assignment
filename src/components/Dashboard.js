import React, { useContext, useState } from 'react'
import LightModeIcon from '@mui/icons-material/LightMode';
import { Box, FormControlLabel, IconButton, Switch, Typography, styled } from '@mui/material';
import { ThemeContext } from '../App';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import light_logo from "../assets/light_logo.png";
import HouseIcon from '@mui/icons-material/House';
import dark_logo from "../assets/dark_logo.png";
import MailIcon from '@mui/icons-material/Mail';
import TelegramIcon from '@mui/icons-material/Telegram';
import BarChartIcon from '@mui/icons-material/BarChart';
import DehazeIcon from '@mui/icons-material/Dehaze';
import PowerInputIcon from '@mui/icons-material/PowerInput';
import NoPage from './NoPage';
import MailSection from './MailSection';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import dashboard from '../assets/dashboard.png';
import ldashboard from '../assets/ldashboard.png';
import lightMode from "../assets/light.png"
import darkMode from "../assets/dark_mode.png"



const Dashboard = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    const [selected, setSelected] = useState(1);
    const handleTheme = () => {
        if (theme.palette.background === "white") {
            setTheme({
                ...theme,
                palette: {
                    ...theme.palette,
                    mode: "dark",
                    background: "#25262B",
                    color: "white",
                }
            })
        } else {
            setTheme({
                ...theme,
                palette: {
                    ...theme.palette,
                    mode: "light",
                    background: "white",
                    color: "black",
                }
            })
        }
    }

    const handleClick = (val) => {
        setSelected(val)
    }

    const getComponent = () => {
        if (selected !== 6) {
            return (<><NoPage /></>)
        }
        else return (<><MailSection /></>)
    }

    const Android12Switch = styled(Switch)(({ theme }) => ({
        padding: 8,
        '& .MuiSwitch-track': {
          borderRadius: 22 / 2,
          '&::before, &::after': {
            content: '""',
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            width: 16,
            height: 16,
          },
          '&::before': {
            backgroundImage: `url(${lightMode})`,
            left: 12,
          },
          '&::after': {
            backgroundImage: `url(${darkMode})`,
            right: 12,
          },
        },
        '& .MuiSwitch-thumb': {
          boxShadow: 'none',
          width: 16,
          height: 16,
          margin: 2,
        },
      

      }));



    return (

        <div>
            <Box sx={{ display: "flex", flexWrap:"nowrap", background: theme.palette.mode === "dark" ? "black" : "white",width:"100vw"}}>
                <Box sx={{ background: theme.palette.mode === "dark" ? "#101113" : "white", maxWidth: "2.8vw", minHeight: "100vh",  paddingInline: "1.2rem", boxShadow: "0 0 0.5px 0.5px  ", display: "flex", flexDirection: "column", gap: "1.8rem" }}>
                    <Box mr={-2}>
                        {theme.mode === "dark" ?
                            (<><img src={dark_logo} /></>) : (<><img src={light_logo} /></>)
                        }
                    </Box>
                    <Box mt={2} sx={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                        <IconButton onClick={() => handleClick(1)} sx={{ color: selected === 1 ? theme.palette.mode ==="dark"? theme.palette.color : "#595A5B" : "grey" ,background:selected === 1 ? theme.palette.mode ==="dark"? theme.palette.background : "#F0F0F0": "", borderRadius:"15px"}} >
                            <HouseIcon />
                        </IconButton>
                        <IconButton onClick={() => handleClick(2)} sx={{ color: selected === 2 ? theme.palette.mode ==="dark"? theme.palette.color : "#595A5B" : "grey" ,background:selected === 2 ? theme.palette.mode ==="dark"? theme.palette.background : "#F0F0F0": "", borderRadius:"15px"}} >
                            <PersonSearchIcon />
                        </IconButton>
                        <IconButton onClick={() => handleClick(3)} sx={{ color: selected === 3 ? theme.palette.mode ==="dark"? theme.palette.color : "#595A5B" : "grey", background:selected === 3 ? theme.palette.mode ==="dark"? theme.palette.background : "#F0F0F0": "", borderRadius:"15px" }} >
                            <MailIcon />
                        </IconButton>
                        <IconButton onClick={() => handleClick(4)} sx={{ color: selected === 4 ? theme.palette.mode ==="dark"? theme.palette.color : "#595A5B" : "grey", background:selected === 4 ? theme.palette.mode ==="dark"? theme.palette.background : "#F0F0F0": "", borderRadius:"15px" }} >
                            <TelegramIcon />
                        </IconButton>
                        <IconButton onClick={() => handleClick(5)} sx={{ color: selected === 5 ? theme.palette.mode ==="dark"? theme.palette.color : "#595A5B" : "grey", background:selected === 5 ? theme.palette.mode ==="dark"? theme.palette.background : "#F0F0F0": "", borderRadius:"15px" }} >
                            <DehazeIcon />
                        </IconButton>
                        <IconButton onClick={() => handleClick(6)} sx={{ color: selected === 6 ?theme.palette.mode ==="dark"? theme.palette.color : "#595A5B" : "grey", background:selected === 6 ? theme.palette.mode ==="dark"? theme.palette.background : "#F0F0F0": "", borderRadius:"15px",padding:"15px" }} >
                            {/* <PowerInputIcon /> */}
                           { (theme.palette.mode==="dark") ? (<img src={dashboard}/>):(<img src={ldashboard}/>)}
                        </IconButton>
                        <IconButton onClick={() => handleClick(7)} sx={{color: selected === 7 ? theme.palette.mode ==="dark"? theme.palette.color : "#595A5B" : "grey", background:selected === 7 ? theme.palette.mode ==="dark"? theme.palette.background : "#F0F0F0": "", borderRadius:"15px" }} >
                            <BarChartIcon />
                        </IconButton>
                        <Box sx={{ backgroundColor: "#03793c", padding: "6px", borderRadius: "5rem", position: "fixed", bottom: "20px",color:"#fff" }}>
                        AD
                    </Box>
                     {/* <IconButton sx={{ backgroundColor: "#03793c", color:theme.palette.color , padding: "6px", borderRadius: "5rem", position: "absolute", bottom: "20px" }}>
                            AD
                        </IconButton>  */}
                    </Box> 

                  

                </Box>
                <Box sx={{width:"100%"}}>
                    <Box sx={{ background: theme.palette.background, display: "flex", justifyContent: "space-between", alignItems: "center ", paddingTop: "20px",paddingBottom: "20px", maxHeight: "2vh", paddingInline: "1.5rem", boxShadow: "0 3px 5px -3px " }}>

                        < Typography variant="body" > Onebox</Typography>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            {/* <IconButton onClick={handleTheme} sx={{ color: theme.palette.color }} >
                                {theme.palette.mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
                            </IconButton> */}
                            <FormControlLabel
                             control={<Android12Switch          
                            checked={theme.palette.mode === 'dark'}
                            size='large'
                            color="default"
                             onChange={handleTheme} />
                            }

        />
                            <Typography variant="body">Tims workspace     <KeyboardArrowDownIcon sx={{ display: "inline-block", verticalAlign: "middle" }} size="12" /></Typography>
                        </Box>
                    </Box >
                    {getComponent()}
                </Box >
            </Box >
        </div >

    )
}



export default Dashboard
