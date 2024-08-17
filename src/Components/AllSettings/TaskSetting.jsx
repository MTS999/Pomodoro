import React from "react";
import { useContext } from "react";
import Typography from "@mui/material/Typography";
import { Box, TextField } from "@mui/material";
import PomodoroContext from "../../PomodoroContext";
import { useTheme } from "@mui/material/styles";
// import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import IOSSwitch from "./IOSSwitch";

const TaskSetting = () => {
  const theme = useTheme();
  const {
    autoCheckTasks, setAutoCheckTasks,
    autoSwitchTasks, setAutoSwitchTasks
  } = useContext(PomodoroContext);

  return (
    <>
      <Box
        width={"400px"}
        display={"flex"}
        // alignItems={"center"}
        flexDirection={"column"}
      >
        <Box mb={2}>
          {/* <QueryBuilderIcon /> */}
          <Typography
            width={"100%"}
            // display={"block"}
            // alignSelf={"start"}
            // sx={{backgroundColor:"green"}}
            variant="h6"
            fontWeight={"bold"}
            color={theme.palette.setting.main}
            textAlign={"start"}
          >
            <i className="nf nf-md-checkbox_marked_circle_outline" style={{ marginRight: "8px" }}></i>
            Task
          </Typography>
        </Box>
        

        

        <Box
          width={"100%"}
          display={"flex"}
          justifyContent={"space-between"}
          mb={2}
          // sx={{ backgroundColor: "green" }}
        >
          <Typography
            display={"inline-block"}
            variant="h6"
            fontWeight={"bold"}
            color={theme.palette.setting.text}
          >
            Auto Check Tasks
          </Typography>
          <IOSSwitch
            checked={autoCheckTasks}
            onChange={() => setAutoCheckTasks((prev) => !prev)}
          />
        </Box>
        <Box
          width={"100%"}
          display={"flex"}
          justifyContent={"space-between"}
          mb={2}
          // sx={{ backgroundColor: "green" }}
        >
          <Typography
            display={"inline-block"}
            variant="h6"
            fontWeight={"bold"}
            color={theme.palette.setting.text}
          >
            Auto switch Tasks
          </Typography>
          <IOSSwitch
            checked={autoSwitchTasks}
            onChange={() => setAutoSwitchTasks((prev) => !prev)}
          />
        </Box>
       
      </Box>
    </>
  );
};

export default TaskSetting;
