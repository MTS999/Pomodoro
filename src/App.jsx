import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Divider } from "@mui/material";
import "./App.css";
import Counter from "./Components/Counter";
import Header from "./Components/Header";
import CustomThemeProvider from "./CustomThemeProvider";
import { PomodoroProvider } from "./PomodoroContext";
import Setting from "./Components/Setting";
import Setting1 from "./Components/Setting";
import Task from "./Components/Task";
import TaskMenu from "./Components/TaskMenu";
import AudioPlayer from "./Components/AllSettings/AudioPlayer";

function App() {
  return (
    <>
      <React.Fragment>
        <PomodoroProvider>
          <CustomThemeProvider>
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
                <Setting/>
                <Task/>
                <AudioPlayer/>
              </Box>
            </Container>
          </CustomThemeProvider>
        </PomodoroProvider>
      </React.Fragment>
    </>
  );
}

export default App;
