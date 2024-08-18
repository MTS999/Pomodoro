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
      white:"white",
      line:"#A34040"
    },
  },
});

// Short Break Theme
const shortBreakTheme = createTheme({
  palette: {
    setting: {
      main: '#CCCCCC',
      secondary: '#EFEFEF',
      text: '#555555',
      menu: "#999999",
    },
    background: {
      default: '#9B8238',
      primary: "#A58F4C",
      secondary: "#8C7A41",
      white:"white",
      line:"#8C7A41"


    },
  },
});

// Long Break Theme
const longBreakTheme = createTheme({
  palette: {
    setting: {
      main: '#CCCCCC',
      secondary: '#EFEFEF',
      text: '#555555',
      menu: "#999999",
    },
    background: {
      default: '#545764',
      primary: "#656874",
      secondary: "#565963",
      white:"white",
      line:"#656874"


    },
  },
});

export { pomodoroTheme, shortBreakTheme, longBreakTheme };
