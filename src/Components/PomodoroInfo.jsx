import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Box, Button, Typography, Divider, TextField } from "@mui/material";
import PomodoroContext from "../PomodoroContext";
import { useTheme } from "@mui/material/styles";
const PomodoroInfo = () => {
  const theme = useTheme();
  const { Tasks, setTasks, pomodoroTime } = useContext(PomodoroContext);
  const [newTime, setNewTime] = useState("");
  const [timeDifference, setTimeDifference] = useState("");
  const [totalPomodoros, setTotalPomodoros] = useState(
    Tasks.reduce((total, task) => {
      return total + task.totalPomodoros;
    }, 0)
  );
  const [totalCompletedPomodoros, setTotalCompletedPomodoros] = useState(
    Tasks.reduce((total, task) => {
      return total + task.comletetedPomodoro;
    }, 0)
  );
  const [RemainingTime, setRemainingTime] = useState(
    Tasks.reduce((total, task) => {
      return (
        total + (task.totalPomodoros - task.comletetedPomodoro) * pomodoroTime
      );
    }, 0)
  );

  console.log(newTime);
  console.log(timeDifference);

  useEffect(() => {
    const currentTime = new Date();
    currentTime.setSeconds(currentTime.getSeconds() + RemainingTime);
    const hours = currentTime.getHours().toString().padStart(2, "0");
    const minutes = currentTime.getMinutes().toString().padStart(2, "0");
    const displayTime = `${hours}:${minutes}`;
    let hoursDiff = Math.floor(RemainingTime / 3600);
    let minutesDiff = Math.floor((RemainingTime % 3600) / 60);
    setNewTime(displayTime);
    setTimeDifference(
      `${hoursDiff < 1 ? "" : hoursDiff}${
        hoursDiff < 1 ? "" : "h"
      } ${minutesDiff}m`
    );
  }, [pomodoroTime, RemainingTime]);

  return (
    <Box
    width={"100%"}
      display={"flex"}
      flexDirection={{sm:"row",xs:"column"}}
      alignItems={"center"}
      justifyContent={"center"}
      gap={{sm:3,xs:1}}
    //   backgroundColor={"green"}
    >
      <Box display={"inline-block"}>
        <Typography
          variant="body1"
          display={"inline-block"}
          color={theme.palette.background.white}
        >
          Promos:
        </Typography>
        <Typography
          variant="h5"
          display={"inline-block"}
          color={theme.palette.background.white}
          fontWeight={"bold"}
        >
          {totalCompletedPomodoros}
        </Typography>
        <Typography
          variant="body1"
          display={"inline-block"}
          color={theme.palette.background.white}
        >
          &nbsp;/&nbsp;
        </Typography>
        <Typography
          variant="h5"
          display={"inline-block"}
          color={theme.palette.background.white}
          fontWeight={"bold"}
        >
          {totalPomodoros}
        </Typography>
      </Box>
      <Box display={"inline-block"}>
        <Typography
          variant="body1"
          display={"inline-block"}
          color={theme.palette.background.white}
        >
          Finished at:
        </Typography>
        <Typography
          variant="h5"
          display={"inline-block"}
          color={theme.palette.background.white}
          fontWeight={"bold"}
        >
          {newTime}
        </Typography>
        <Typography
          variant="body1"
          display={"inline-block"}
          color={theme.palette.background.white}
        >
          &nbsp;&nbsp;
        </Typography>
        <Typography
          variant="body1"
          display={"inline-block"}
          color={theme.palette.background.white}
          //   fontWeight={"bold"}
        >
          ({timeDifference})
        </Typography>
      </Box>
    </Box>
  );
};

export default PomodoroInfo;
