
import './App.css';
import { Route, Routes } from 'react-router-dom';
import mainlogo from "../src/assets/main_logo.png";
import google from "../src/assets/google.png";
import { Box, Button, Typography, } from '@mui/material';
import { createMuiTheme } from '@mui/material/styles';
import Main from './components/Main';
import Dashboard from './components/Dashboard';
import { createContext, useState } from 'react';
export const ThemeContext = createContext();


function App() {

  const [theme, setTheme] = useState({
    palette: {
      mode: "dark",
      background: "#25262B",
      color: "white",
      minHeight: "100vh"
    }
  });


  // token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoiYW1hbmR1YmV5NDUxQGdtYWlsLmNvbSIsImlkIjoxNDEsImZpcnN0TmFtZSI6IkFtYW4iLCJsYXN0TmFtZSI6IkR1YmV5In0sImlhdCI6MTcxNDExNDMwOCwiZXhwIjoxNzQ1NjUwMzA4fQ.BkvpgN0AF2I1Sc58I3gHBsT3eWzg5-s_E0nx1yvJhRw
  return (
    <div style={theme.palette}>

      <ThemeContext.Provider value={{ theme, setTheme }} >
        {/* <Main /> */}
        <Routes>
          <Route exact path='/' Component={Main} />
          <Route exact path='/dashboard' Component={Dashboard} />
        </Routes>
      </ThemeContext.Provider>
    </div >
  );
}

export default App;
