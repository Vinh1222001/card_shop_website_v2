import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store';
import { CssBaseline, ThemeProvider, alpha, createTheme } from '@mui/material';

const violet = "#6C2F9F"
const orange = "#F7CC86"

const theme = createTheme({
  palette:{
    primary:{
      main: violet,
      // light: alpha(violetDark, 0.1),
      // dark: violetDark,
      contrastText: "#fff"
    },
    secondary:{
      main: orange,
      // light: alpha(orangeDark,0.3),
      // dark:orangeDark,
      contrastText: "#fff"
    },
    tonalOffset:{
      light: 0.2,
      dark: 0.7
    }
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <ThemeProvider theme={theme}>

        <CssBaseline/>
        <App />
      </ThemeProvider>

    </Provider>    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
