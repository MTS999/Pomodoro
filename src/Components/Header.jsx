import React from "react";
import { useContext } from "react";
import { Button, Typography, Box, Divider } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import PomodoroContext from "../PomodoroContext";
const Header = () => {
  const theme = useTheme();
  const { openSetting, setOpenSetting } = useContext(PomodoroContext);
  return (
    <>
      <Box marginTop={2}>
        <Typography
          display={"inline-block"}
          mr={10}
          variant="h5"
          fontWeight={"bold"}
          color={theme.palette.background.white}
        >
          Pomodoro
        </Typography>
        <Button
          size="small"
          variant="text"
          sx={{
            marginRight: "10px",
            backgroundColor: theme.palette.background.primary,
            color: theme.palette.background.white,
          }}
        >
          Report
        </Button>
        <Button
          size="small"
          variant="text"
          sx={{
            marginRight: "10px",
            backgroundColor: theme.palette.background.primary,
            color: theme.palette.background.white,
            border: "none",
          }}
          onClick={() => setOpenSetting(!openSetting)}
        >
          Setting
        </Button>
        <Button
          size="small"
          variant="text"
          sx={{
            marginRight: "10px",
            backgroundColor: theme.palette.background.primary,
            color: theme.palette.background.white,
          }}
        >
          SignIn
        </Button>
      </Box>
    </>
  );
};

export default Header;
