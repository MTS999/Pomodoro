import React, { useState, useEffect, useContext, useRef } from "react";
import Button from "@mui/material/Button";
import { Box, LinearProgress, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import PomodoroContext from "../PomodoroContext";
import useMediaQuery from "@mui/material/useMediaQuery";

const Counter = () => {
  const isExtraSmallScreen = useMediaQuery("(max-width:419px)");
  const theme = useTheme();
  const {
    pomodoroTime,
    shortBreakTime,
    longBreakTime,
    longBreakIntervals,
    autoStartBreaks,
    autoStartPomodoros,
    Tasks,
    setTasks,
    currentTaskId,
    setCurrentTaskId,
    select,
    setSelect,
    autoCheckTasks,
    setAutoCheckTasks,
    autoSwitchTasks,
    setAutoSwitchTasks,
  } = useContext(PomodoroContext);

  // console.log(pomodoroTime);
  const [time, setTime] = useState(pomodoroTime);

  const [isActive, setIsActive] = useState(false);
  // const [select, setSelect] = useState(1);
  const [pomodoroCounterForLongBreak, setPomodoroCounterForLongBreak] =
    useState(longBreakIntervals);
  const [firstLoad, setFirstLoad] = useState(true);

  const totalTime =
    select === 1 ? pomodoroTime : select === 2 ? shortBreakTime : longBreakTime;
  const progress = ((totalTime - time) / totalTime) * 100;
  useEffect(() => {
    let interval;
    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    } else if (isActive && time == 0 && select == 1) {
      increamentPomodoro();

      let updateCounter = pomodoroCounterForLongBreak - 1;
      setPomodoroCounterForLongBreak(updateCounter);
      setIsActive(false);
      updateCounter == 0 ? setSelect(3) : setSelect(2);
    } else if (isActive && time == 0 && select == 2) {
      setIsActive(false);
      setSelect(1);
    } else if (isActive && time == 0 && select == 3) {
      setIsActive(false);
      setPomodoroCounterForLongBreak(longBreakIntervals);
      setSelect(1);
    }

    return () => {
      clearInterval(interval);
    };
  }, [
    isActive,
    time,
    pomodoroTime,
    select,
    longBreakIntervals,
    pomodoroCounterForLongBreak,
  ]);
  useEffect(() => {
    if (firstLoad) {
      setFirstLoad(false);
    } else {
      if (select === 1) {
        setTime(pomodoroTime);
        setIsActive(autoStartPomodoros ? true : false);
      }
      if (select === 2) {
        setTime(shortBreakTime);
        setIsActive(autoStartBreaks ? true : false);
      }
      if (select === 3) {
        setTime(longBreakTime);
        setIsActive(autoStartBreaks ? true : false);
      }
    }
  }, [
    pomodoroTime,
    shortBreakTime,
    longBreakTime,
    select,
    autoStartBreaks,
    autoStartPomodoros,
  ]);

  const increamentPomodoro = () => {
    let updatedTasks = Tasks.map((task) => {
      if (task.id == currentTaskId) {
        let updatedTask1 = {
          ...task,
          comletetedPomodoro: task.comletetedPomodoro + 1,
        };
        if (
          autoCheckTasks &&
          updatedTask1.comletetedPomodoro == task.totalPomodoros
        ) {
          updatedTask1.taskComplete = true;
          // return updatedTask1; // Mark task for moving
          if (autoSwitchTasks) {
            return { ...updatedTask1, moveToEnd: true }; // Mark task for moving
          }
          return updatedTask1; // Mark task for moving
        }

        return updatedTask1;
      }
      return task;
    });
    let taskToMOve = updatedTasks.filter((task) => task.moveToEnd);
    // console.log(taskToMOve);
    if (taskToMOve.length > 0) {
      updatedTasks = updatedTasks.filter((task) => !task.moveToEnd);

      updatedTasks.push({ ...taskToMOve[0], moveToEnd: false });
      if (autoSwitchTasks) {
        // Find the next incomplete task
        const nextTask = updatedTasks.find((task) => !task.taskComplete);
        if (nextTask) {
          setCurrentTaskId(nextTask.id);
        }
      }
    }

    setTasks(updatedTasks);
  };

  const timeFormet = () => {
    let minuts = Math.floor(time / 60);
    let second = time % 60;

    return (
      <Typography variant="h1" color="white" fontWeight={"bold"}>{`${
        minuts < 10 ? "0" : ""
      }${minuts}:${second < 10 ? "0" : ""}${second}`}</Typography>
    );
  };

  const handleClick = (time, selection) => {
    setTime(time);
    setIsActive(false);
    setSelect(selection);
  };
  const getButtonStyles = (buttonSelect) => ({
    backgroundColor:
      select === buttonSelect ? theme.palette.background.secondary : "",
    color: theme.palette.background.white,
    fontWeight: select === buttonSelect ? "bold" : "",
    padding: "",
  });
  return (
    <>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          color: "white",
          width: "100%",
          mb: 2,
          height: 4,
          borderRadius: 2,
          
          "&.MuiLinearProgress-root": {
            backgroundColor: theme.palette.background.line, 
            // backgroundColor: "transparent", 
          },
          "& .MuiLinearProgress-bar": {
            backgroundColor: "white", // Progress color (filled part)
          },
        }} // Custom styles
      />
      <Box
        width={{ sm: "80%", xs: "100%" }}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-around"}
        alignItems={"center"}
        sx={{ backgroundColor: theme.palette.background.primary }}
        paddingTop={3}
        paddingBottom={3}
        mt={3}
        backgroundColor="brown"
        borderRadius={2}
      >
        <Box
          width={"100%"}
          display={"flex"}
          justifyContent={"center"}
          gap={isExtraSmallScreen ? "20px" : "opx"}
        >
          <Button
            size="large"
            variant="text"
            onClick={() => handleClick(pomodoroTime, 1)}
            style={getButtonStyles(1)}
            sx={{
              paddingLeft: "14px",
              paddingRight: "14px",
            }}
          >
            {!isExtraSmallScreen ? "Pomodoro" : "Pomo"}

            {/* Pomodoro */}
          </Button>
          <Button
            size="small"
            variant="text"
            color="primary"
            onClick={() => handleClick(shortBreakTime, 2)}
            style={getButtonStyles(2)}
            sx={{
              paddingLeft: "14px",
              paddingRight: "14px",
            }}
          >
            {!isExtraSmallScreen ? "Short Break" : "Short"}
          </Button>
          <Button
            size="small"
            variant="text"
            color="primary"
            onClick={() => handleClick(longBreakTime, 3)}
            style={getButtonStyles(3)}
            sx={{
              paddingLeft: "14px",
              paddingRight: "14px",
            }}
          >
            {!isExtraSmallScreen ? " Long Break" : "Long"}
          </Button>
        </Box>
        <Box mt={4} mb={2}>
          {" "}
          {timeFormet()}
        </Box>

        <Button
          variant="contained"
          size="large"
          onClick={() => (isActive ? setIsActive(false) : setIsActive(true))}
          sx={{
            color: theme.palette.background.default,
            backgroundColor: theme.palette.background.white,
            fontSize: "20px",
            padding: "10px 40px",
            fontWeight: "bold",
            ":hover": {
              backgroundColor: theme.palette.background.white,
            },
          }}
        >
          {isActive ? "Stop" : "Start"}
        </Button>
      </Box>
    </>
  );
};

export default Counter;
