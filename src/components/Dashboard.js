import React, { useContext, useState } from 'react'
import LightModeIcon from '@mui/icons-material/LightMode';
import { Box, IconButton, Typography } from '@mui/material';
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
        if (selected !== 5) {
            return (<><NoPage /></>)
        }
        else return (<><MailSection /></>)
    }



    return (

        <div>
            <Box sx={{ display: "flex", background: theme.palette.mode === "dark" ? "black" : "white" }}>
                <Box sx={{ background: theme.palette.mode === "dark" ? "black" : "white", maxWidth: "2vw", minHeight: "100vh", paddingInline: "0.1rem", paddingInline: "1.2rem", boxShadow: "0 0 1px 1px  #000", display: "flex", flexDirection: "column", gap: "2rem" }}>
                    <Box mr={-2}>
                        {theme.mode === "dark" ?
                            (<><img src={dark_logo} /></>) : (<><img src={light_logo} /></>)
                        }
                    </Box>
                    <Box mt={5} sx={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                        <IconButton onClick={() => handleClick(1)} sx={{ color: selected === 1 ? theme.palette.color : "grey" }} >
                            <HouseIcon />
                        </IconButton>
                        <IconButton onClick={() => handleClick(2)} sx={{ color: selected === 2 ? theme.palette.color : "grey" }} >
                            <MailIcon />
                        </IconButton>
                        <IconButton onClick={() => handleClick(3)} sx={{ color: selected === 3 ? theme.palette.color : "grey" }} >
                            <TelegramIcon />
                        </IconButton>
                        <IconButton onClick={() => handleClick(4)} sx={{ color: selected === 4 ? theme.palette.color : "grey" }} >
                            <DehazeIcon />
                        </IconButton>
                        <IconButton onClick={() => handleClick(5)} sx={{ color: selected === 5 ? theme.palette.color : "grey" }} >
                            <PowerInputIcon />
                        </IconButton>
                        <IconButton onClick={() => handleClick(6)} sx={{ color: selected === 6 ? theme.palette.color : "grey" }} >
                            <BarChartIcon />
                        </IconButton>
                    </Box>

                    <Box sx={{ backgroundColor: "#03793c", padding: "6px", borderRadius: "5rem", position: "absolute", bottom: "20px" }}>
                        AD
                    </Box>

                </Box>
                <Box>
                    <Box sx={{ background: theme.palette.background, display: "flex", justifyContent: "space-between", alignItems: "center ", paddingTop: "20px", paddingBottom: "20px", maxHeight: "2vh", minWidth: "93vw", paddingInline: "1.5rem", boxShadow: "0 3px 5px -3px #000" }}>

                        < Typography variant="body" > Onebox</Typography>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <IconButton onClick={handleTheme} sx={{ color: theme.palette.color }} >
                                {theme.palette.mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
                            </IconButton>
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
