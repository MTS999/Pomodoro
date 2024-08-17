  import React from "react";
  import { useContext } from "react";
  import Typography from "@mui/material/Typography";
  import { Box, TextField } from "@mui/material";
  import PomodoroContext from "../../PomodoroContext";
  import { useTheme } from "@mui/material/styles";
  // import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
  import IOSSwitch from "./IOSSwitch";

  const Timer = () => {
    const theme = useTheme();
    const {
      pomodoroTime,
      setPomodoroTime,
      shortBreakTime,
      setShortBreakTime,
      longBreakTime,
      setLongBreakTime,
      longBreakIntervals,
      setLongBreakIntervals,
      autoStartBreaks,
      setAutoStartBreaks,
      autoStartPomodoros,
      setAutoStartPomodoros,
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
              <i className="nf nf-weather-time_8"></i>
              Timer
            </Typography>
          </Box>
          <Typography
            variant="h6"
            fontWeight={"bold"}
            color={theme.palette.setting.text}
          >
            Time (minuts)
          </Typography>

          <Box
            display={"flex"}
            justifyContent={"space-between"}
            width={"100%"}
            mb={3}
            // sx={{backgroundColor:"greeen"}}
          >
            <Box>
              <Typography
                variant="body1"
                color={theme.palette.setting.main}
                fontWeight={"bold"}
              >
                Pomodoro
              </Typography>
              <TextField
                id="outlined-number"
                //   label="Number"
                type="number"
                size="small"
                value={pomodoroTime / 60}
                onChange={(e) => {
                  const input = e.currentTarget.value;
                  const minuts = Math.min(input, 999);
                  let ans=(Math.floor(minuts) * 60)+ Math.round( ((minuts-Math.floor(minuts))*60))
                  setPomodoroTime(ans);
                }}
                InputLabelProps={{
                  shrink: true,
                }}
                sx={{ width: "120px" ,
                  backgroundColor:theme.palette.setting.secondary

                }}            />
            </Box>
            <Box>
              <Typography
                variant="body1"
                color={theme.palette.setting.main}
                fontWeight={"bold"}
              >
                ShortBreak
              </Typography>
              <TextField
                id="outlined-number"
                //   label="Number"
                type="number"
                size="small"
                value={shortBreakTime / 60}
                onChange={(e) => {
                  const input = e.currentTarget.value;
                  const minuts = Math.min(input, 999);
                  let ans=(Math.floor(minuts) * 60)+ Math.round( ((minuts-Math.floor(minuts))*60))
                  setShortBreakTime( ans);
                }}
                InputLabelProps={{
                  shrink: true,
                }}
                sx={{ width: "120px" ,
                  backgroundColor:theme.palette.setting.secondary

                }}            />
            </Box>
            <Box>
              <Typography
                variant="body1"
                color={theme.palette.setting.main}
                fontWeight={"bold"}
              >
                LongBreak
              </Typography>
              <TextField
                id="outlined-number"
                //   label="Number"
                type="number"
                size="small"
                // color={theme.palette.setting.secondary}
                
                onChange={(e) => {
                  const input = e.currentTarget.value;
                  const minuts = Math.min(input, 999);
                  let ans=(Math.floor(minuts) * 60)+ Math.round( ((minuts-Math.floor(minuts))*60))
                  setLongBreakTime(ans);
                }}
                value={longBreakTime / 60}
                InputLabelProps={{
                  shrink: true,
                }}
                sx={{ width: "120px" ,
                  backgroundColor:theme.palette.setting.secondary

                }}
                InputProps={{
                  style: {
                    border: 'none', // Remove border from input element
                    outline: 'none', // Remove outline
                  }
                }} // Adjust the width as needed
              />
            </Box>
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
              Auto Start Break
            </Typography>
            <IOSSwitch
              checked={autoStartBreaks}
              onChange={() => setAutoStartBreaks((prev) => !prev)}
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
              Auto Start Pomodoro
            </Typography>
            <IOSSwitch
              checked={autoStartPomodoros}
              onChange={() => setAutoStartPomodoros((prev) => !prev)}
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
              Long Break Intervals
            </Typography>
            <TextField
              id="outlined-number"
              type="number"
              size="small"
              onChange={(e) => setLongBreakIntervals(e.target.value)}
              value={longBreakIntervals}
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                disableUnderline: true, // This removes the underline (border)
                sx: {
                  border: 'none', // Ensures no border is visible
                },
              }}
              sx={{ width: "120px" ,
                backgroundColor:theme.palette.setting.secondary,
                color:theme.palette.setting.secondary

              }}           />
          </Box>
        </Box>
      </>
    );
  };

  export default Timer;
