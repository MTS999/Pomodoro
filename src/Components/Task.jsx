import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Box, Button, Typography, Divider, TextField } from "@mui/material";
import PomodoroContext from "../PomodoroContext";
import { useTheme } from "@mui/material/styles";
import TaskMenu from "./TaskMenu";
const Task = () => {
  const theme = useTheme();
  const {
    Tasks,
    setTasks,
    currentTaskId,
    setCurrentTaskId,
    select,totalPomodoroCount, setTotalPomodoroCount,
    // autoCheckTasks,
    // setAutoCheckTasks,
    // autoSwitchTasks,
    // setAutoSwitchTasks,
    isDarkTheme,
    isActive,
  } = useContext(PomodoroContext);
  const [currentTask, setCurrentTask] = useState(null);
  // console.log(currentTask);
  const [newTask, setNewTask] = useState({
    id: "",
    title: "",
    totalPomodoros: 1,
    notes: "",
    comletetedPomodoro: 0,
    taskComplete: false,
  });
  const [openTask, setOpenTask] = useState(false);

  useEffect(() => {
    let task = Tasks.filter((task) => task.id == currentTaskId);
    // console.log(task);
    setCurrentTask(task[0]);
  }, [currentTaskId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setNewTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleClose = () => {
    alert("the input data will be lost .Are you sure you want to close it?");
    setOpenTask(false);
  };
  const handleSave = () => {
    newTask.id = Tasks.length + 1;
    if (!Array.isArray(Tasks)) {
      setTasks([newTask]); // Initialize as an array if it isn't one
    } else {
      setTasks([...Tasks, newTask]); // Add the new task to the Tasks array
    }
    setOpenTask(false);
    setNewTask({
      id: "",
    title: "",
    totalPomodoros: 1,
    notes: "",
    comletetedPomodoro: 0,
    taskComplete: false,
    })
  };
  const TaskClickHandle = (e) => {
    console.log("mts", e);
    setCurrentTaskId(e);
  };
  const taskCompleteHandle = (taskId) => {
    let updatedTasks = Tasks.map((task) => {
      if (task.id == taskId) {
        return { ...task, taskComplete: !task.taskComplete };
      }
      return task;
    });

    setTasks(updatedTasks);
  };
  const taskList = Tasks.map((task) => (
    <Box
      backgroundColor={"white"}
      key={task.id}
      mb={1}
      onClick={() => TaskClickHandle(task.id)}
      borderLeft={currentTaskId == task.id ? "5px solid black" : ""}
      borderRadius={2}
      pb={1}
    >
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        // backgroundColor={"green"}
        // mb={1}
        p={2}
      >
        <Box display={"inline-block"}>
          <Typography
            display={"inline-block"}
            variant="h4"
            color={task.taskComplete ? "red" : theme.palette.setting.main}
            onClick={() => taskCompleteHandle(task.id)}
          >
            <i className="nf nf-fa-check_circle"></i>
          </Typography>
          <Typography
            display={"inline-block"}
            variant="h6"
            fontWeight={"bold"}
            color={theme.palette.setting.text}
            ml={2}
            sx={{ textDecoration: task.taskComplete ? "line-through" : "" }}
          >
            {task.title}
          </Typography>
        </Box>
        <Box display={"inline-block"}>
          <Typography
            display={"inline-block"}
            variant="h5"
            fontWeight={"bold"}
            color={theme.palette.setting.main}
          >
            {task.comletetedPomodoro}
          </Typography>
          <Typography
            display={"inline-block"}
            variant="h6"
            fontWeight={"bold"}
            color={theme.palette.setting.main}
            // pt={4}
            // backgroundColor={"green"}
            ml={0.2}
          >
            /{task.totalPomodoros}
            &nbsp;&nbsp;
          </Typography>
          <Box
            display={"inline-block"}
            justifyContent={"center"}
            textAlign={"center"}
            height={"35px"}
            width={"30px"}
            border={`2px solid ${theme.palette.setting.secondary}`}
            // backgroundColor={theme.palette.setting.secondary}
            backgroundColor={"white"}
            borderRadius={"5px"}
          >
            <Typography variant="h6" color={theme.palette.setting.menu}>
              <i color="white" className="nf nf-md-dots_vertical"></i>
            </Typography>
          </Box>
        </Box>
      </Box>
      {task.notes && (
        <Box p={2} ml={3} backgroundColor={"#FCF8DE"}>
          {task.notes}
        </Box>
      )}
    </Box>
  ));
  return (
    <>
      <Box
        width={{ sm: "80%", xs: "100%" }}
        mt={3}
        mb={2}
        // backgroundColor="green"
      >
        <Box>
          <Typography 
                   visibility={!(isDarkTheme && isActive) ? "visible" : "hidden"}

          textAlign={"center"} variant="body1" color={theme.palette.setting.main}>
           #{totalPomodoroCount}
          </Typography>
          <Typography textAlign={"center"} variant="body1" color="white">
            {
              // select==1? "Time for a Break":"mts"

              currentTaskId?  currentTask?.title: (select==1?"Time to focus!":"Time for a Break!")
              // currentTask?.title
            }
          </Typography>
        </Box>
        <Box
         visibility={!(isDarkTheme && isActive) ? "visible" : "hidden"}>
          <Box
            visibility={!(isDarkTheme && isActive) ? "visible" : "hidden"}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            mb={2}
          >
            <Typography
              display={"inline-block"}
              variant="h6"
              color="white"
              fontWeight={"bold"}
            >
              Tasks
            </Typography>

            <TaskMenu />
          </Box>

          <Divider
            sx={{
              visibility: !(isDarkTheme && isActive) ? "visible" : "hidden",

              width: "100%",
              borderBottomWidth: 2, // Adjust the thickness
              borderColor: "white", // Change the color
              marginY: 2, // Adjust the width to fit the parent container
            }}
          />
          {taskList}
        </Box>
        <Box
          width={"100%"}
          // backgroundColor={"green"}
        >
          {!openTask && (
            <Box
              visibility={!(isDarkTheme && isActive) ? "visible" : "hidden"}
              onClick={() => setOpenTask(!openTask)}
              mt={3}
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.2)", // Semi-transparent white background
                borderRadius: "5px",
                backdropFilter: "blur(5px)",

                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.3)",
                  backdropFilter: "blur(5px) brightness(1.2)",
                },
              }}
              height={"60px"}
              width={"100%"}
              border={"2px dashed white"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Typography fontWeight={"bold"} variant="h6" color="#E2DBE9">
                <i className="nf nf-oct-diff_added"></i> Add Task
              </Typography>
            </Box>
          )}
          {openTask && (
            <Box
              // width={"100%"}
              visibility={!(isDarkTheme && isActive) ? "visible" : "hidden"}
              mt={2}
              borderRadius={3}
              pt={2}
              //   padding={2}
              pl={2}
              pr={2}
              sx={{
                backgroundColor: "white",
              }}
            >
              <Box width={"100%"}>
                <TextField
                  id="Task"
                  name="title"
                  placeholder="What are you working on?"
                  fullWidth
                  value={newTask.title}
                  onChange={handleInputChange}
                />
                <Typography variant="h5" color="initial">
                  Est Pomodoros
                </Typography>
                <TextField
                  id="outlined-number"
                  type="number"
                  size="small"
                  name="totalPomodoros"
                  value={newTask.totalPomodoros}
                  onChange={handleInputChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  sx={{
                    width: "120px",
                    backgroundColor: theme.palette.setting.secondary,
                  }}
                />
                <Box>
                  <Typography
                    variant="h6"
                    color={theme.palette.setting.main}
                    fontWeight={"bold"}
                    sx={{ textDecoration: "underline" }}
                  >
                    <i className="nf nf-cod-add"></i>
                    Add Note
                  </Typography>
                  <TextField
                    id="outlined-multiline-flexible"
                    fullWidth
                    multiline
                    name="notes"
                    value={newTask.notes}
                    placeholder="Some notes"
                    rows={4}
                    sx={{
                      backgroundColor: theme.palette.setting.secondary,
                    }}
                    onChange={handleInputChange}
                  />
                </Box>
              </Box>
              <Box
                visibility={!(isDarkTheme && isActive) ? "visible" : "hidden"}
                mt={3}
                height={"100px"}
                fullWidth
                backgroundColor={theme.palette.setting.secondary}
                display={"flex"}
                justifyContent={"end"}
                alignItems={"center"}
                gap={2}
                pr={2}
              >
                <Button
                  variant="contained"
                  sx={{
                    color: theme.palette.setting.main,
                    fontWeight: "bold",
                    backgroundColor: theme.palette.setting.secondary,
                    ":hover": {
                      backgroundColor: theme.palette.setting.secondary,
                    },
                  }}
                  onClick={handleClose}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  sx={{ color: "white", backgroundColor: "black" }}
                  onClick={handleSave}
                  disabled={!newTask.title}
                >
                  Save
                </Button>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};

export default Task;
