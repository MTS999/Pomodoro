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
import PomodoroInfo from "./Components/PomodoroInfo";

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
      
        maxWidth="1700px"
        sx={{ backgroundColor: "background.default",
          //  height: "200vh" 
          }}
          
      >

        <Box
          display={"flex"}
          // width={"50%"}3
          width={{ xs: "100%", sm: "600px" }} // Responsive width

          flexDirection={"column"}
          alignItems={"center"}
          margin={"auto"}
          pb={5}
        >
          <Header />
      
          <Counter />
          <Setting />
          <Task />
          <Divider
            sx={{
              width: "100%",
              borderBottomWidth: 2, // Adjust the thickness
              borderColor: "white", // Change the color
              marginY: 2, // Adjust the width to fit the parent container
            }}
          />
          <PomodoroInfo/>
          <AudioPlayer />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
