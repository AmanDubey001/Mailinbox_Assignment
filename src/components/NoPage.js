import React, { useContext } from 'react';
import noMessage from "../assets/No Message illustration.png"
import { Typography } from '@mui/material';
import { ThemeContext } from '../App';

const NoPage = () => {
    const { theme } = useContext(ThemeContext)
    return (
        <div style={{ display: 'flex', flexDirection: "column", justifyContent: "center", minHeight: "90%", alignItems: "center" }}>
            <div>
                <img src={noMessage} />
            </div>
            <Typography mt={5} sx={{ color: theme.palette.color, fontWeight: 700, fontSize: "2rem" }}>It’s the beginning of a legendary sales pipeline</Typography>

            <Typography mt={3} variant="h6" sx={{ color: "grey" }}>When you have inbound E-mails </Typography>
            <Typography variant="h6" sx={{ color: "grey" }}>you’ll see them here</Typography>

        </div >
    )
}

export default NoPage
