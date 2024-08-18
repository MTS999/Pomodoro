import React from "react";
import { useContext } from "react";
import { Button, Typography, Box, Divider } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import PomodoroContext from "../PomodoroContext";
import useMediaQuery from "@mui/material/useMediaQuery";

const Header = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isExtraSmallScreen = useMediaQuery('(max-width:390px)');

  const { openSetting, setOpenSetting } = useContext(PomodoroContext);
  return (
    <>
      <Box
        width="100%"
        marginTop={2}
        mb={2}
        // backgroundColor={"green"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Typography
          display={"inline-block"}
          mr={10}
          variant="h6"
          fontWeight={"bold"}
          color={theme.palette.background.white}
        >
          <i
            className="nf nf-md-checkbox_marked_circle"
            style={{ marginRight: isSmallScreen ? "0px" : "4px" }}
          ></i>
        
          {!isExtraSmallScreen && "Pomodoro"}

        </Typography>
        <Box>
          <Button
            size="small"
            variant="text"
            sx={{
              marginRight: "10px",
              backgroundColor: theme.palette.background.primary,
              // color: theme.palette.background.white,
              color: "white",

              minWidth: isSmallScreen ? "auto" : "100px", // Adjust width based on screen size
              minHeight: isSmallScreen ? "auto" : "35px",
              // minWidth:"auto",
              padding: isSmallScreen ? "10px" : "0px", // Less padding for small screens
              fontSize: !isSmallScreen ? 'auto' : '18px',

            }}
          >
            <i
              className="nf nf-cod-graph"
              style={{ marginRight: isSmallScreen ? "0px" : "3px" }}
            ></i>
            {!isSmallScreen && "Report"}{" "}
          </Button>
          <Button
            size="small"
            variant="text"
            sx={{
              marginRight: "10px",
              backgroundColor: theme.palette.background.primary,
              // color: theme.palette.background.white,
              color: "white",

              border: "none",
              minWidth: isSmallScreen ? 'auto' : '100px', // Adjust width based on screen size
              minHeight: isSmallScreen ? 'auto' : '35px',
              // minWidth:"auto",
              padding: isSmallScreen ? "10px" : "0px", // Less padding for small screens
              fontSize: !isSmallScreen ? 'auto' : '18px',

            }}
            onClick={() => setOpenSetting(!openSetting)}
          >
            {
              <i
                className="nf nf-cod-settings_gear"
                style={{ marginRight: isSmallScreen ? "0px" : "3px" }}
              ></i>
            }

            {!isSmallScreen && "setting"}
          </Button>
          <Button
            size="small"
            variant="text"
            sx={{
              marginRight: "10px",
              backgroundColor: theme.palette.background.primary,
              // color: theme.palette.background.white,
              color: "white",
     
              minWidth:  'auto' , // Adjust width based on screen size
              minHeight: 'auto' ,
              padding: "10px", // Less padding for small screens
              fontSize: "18px",

            }}
          >
            <i
              className="nf nf-md-dots_vertical"
              style={{ 
               }}
            ></i>
          </Button>
        </Box>
      </Box>
      {/* <Divider
        sx={{
          width: "100%",
          borderBottomWidth: 2, // Adjust the thickness
          borderColor: theme.palette.background.main, // Change the color
          marginY: 2, // Adjust the width to fit the parent container
        }}
      /> */}
    </>
  );
};

export default Header;
