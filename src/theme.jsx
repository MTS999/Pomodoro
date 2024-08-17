import { createTheme } from '@mui/material/styles';

// Define your custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF', // Blue color, replace with your preferred color
    },
    secondary: {
      main: '#f50057', // Pink color, replace with your preferred color
    },
    setting: {
      main: '#CCCCCC', // Green color
      secondary: '#EFEFEF', // Green color
      text: '#555555', // Green color
     menu:"#999999"
    },
    warning: {
      main: '#ff9800', // Orange color
    },
    info: {
      main: '#2196f3', // Light blue color
    },
    background: {
      default: '#BA4949',
      primary:"#C15C5C",
      secondary:"#A44E4E"
    },
  },
});

export default theme;
