import { createTheme } from '@mui/material/styles';

// Pomodoro Theme
const pomodoroTheme = createTheme({
  palette: {
    setting: {
      main: '#CCCCCC',
      secondary: '#EFEFEF',
      text: '#555555',
      menu: "#999999",
    },
    background: {
      default: '#BA4949',
      primary: "#C15C5C",
      secondary: "#A44E4E",
      white:"white"
    },
  },
});

// Short Break Theme
const shortBreakTheme = createTheme({
  palette: {
    setting: {
      main: '#E0F7FA',
      secondary: '#80DEEA',
      text: '#004D40',
      menu: "#00796B",
    },
    background: {
      default: '#00838F',
      primary: "#00ACC1",
      secondary: "#006064",
      white:"white"

    },
  },
});

// Long Break Theme
const longBreakTheme = createTheme({
  palette: {
    setting: {
      main: '#D1C4E9',
      secondary: '#9575CD',
      text: '#4527A0',
      menu: "#7E57C2",
    },
    background: {
      default: '#512DA8',
      primary: "#673AB7",
      secondary: "#311B92",
      white:"white"

    },
  },
});

export { pomodoroTheme, shortBreakTheme, longBreakTheme };
