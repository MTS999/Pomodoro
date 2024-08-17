import * as React from "react";
import { useContext } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Divider } from "@mui/material";
import Counter from "./Components/Counter";
import Header from "./Components/Header";
import Setting from "./Components/Setting";
import Task from "./Components/Task";
import AudioPlayer from "./Components/AllSettings/AudioPlayer";
import PomodoroContext, { PomodoroProvider } from "./PomodoroContext";
import { ThemeProvider } from "@mui/material/styles";

function App() {
  return (
    <PomodoroProvider>
      <PomodoroApp />
    </PomodoroProvider>
  );
}

function PomodoroApp() {
  const { theme } = useContext(PomodoroContext); // Access the theme from context

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="xl"
        sx={{ backgroundColor: "background.default", height: "200vh" }}
      >
        <Box
          display={"flex"}
          width={"50%"}
          flexDirection={"column"}
          alignItems={"center"}
          margin={"auto"}
        >
          <Header />
          <Divider
            sx={{
              width: "100%",
              borderBottomWidth: 2, // Adjust the thickness
              borderColor: "#A44E4E", // Change the color
              marginY: 2, // Adjust the width to fit the parent container
            }}
          />
          <Counter />
          <Setting />
          <Task />
          <AudioPlayer />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
