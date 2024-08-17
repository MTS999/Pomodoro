import React, { useContext } from "react";
import { Icon, Typography, MenuItem, Slider, Select, Box ,TextField} from "@mui/material";
import PomodoroContext from "../../PomodoroContext";
import { useTheme } from "@emotion/react";

const Alarams = () => {
  const {
    selectedTrack,
    setSelectedTrack,
    alarmRepeatCount,
    setAlarmRepeatCount,
    volume,
    setVolume,
  } = useContext(PomodoroContext);
  const theme = useTheme();

  const handleTrackChange = (e) => {
    setSelectedTrack(e.target.value);
  };
  return (
    <>
      <Box
        width={"400px"}
        display={"flex"}
        // alignItems={"center"}
        flexDirection={"column"}
      >
        <Box mb={2}>
          <Typography
            width={"100%"}
            variant="h6"
            fontWeight={"bold"}
            color={theme.palette.setting.main}
            textAlign={"start"}
          >
            <i
              className="nf nf-md-speaker_wireless"
              style={{ marginRight: "8px" }}
            ></i>
            Sound
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
            Alaram sound
          </Typography>
          <Select
            value={selectedTrack}
            onChange={handleTrackChange}
            variant="outlined"
            sx={{
              minWidth: 120,
              backgroundColor: "#f4f4f4",
              borderRadius: "4px",
              "& .MuiSelect-select": {
                padding: "8px 14px",
              },
            }}
          >
            <MenuItem value="/sounds/kitchen.mp3">Kitchen</MenuItem>
            <MenuItem value="/sounds/crow.mp3">Crow</MenuItem>
            <MenuItem value="/sounds/duzz.mp3">rise</MenuItem>
          </Select>
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
            Volume
          </Typography>
          <Box>

         {volume}
          <Slider
            value={volume}
            onChange={(e, newValue) => setVolume(newValue)}
            aria-labelledby="volume-slider"
            sx={{width:"150px",color:theme.palette.setting.main}}
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
            Repeat
          </Typography>

          <TextField
          size="small"
          type="number"
          value={alarmRepeatCount}
          onChange={(e) => setAlarmRepeatCount(Number(e.target.value))}
          inputProps={{ min: 1 }}
          sx={{width:"100px",color:theme.palette.setting.main}}

        />
        </Box>
      </Box>
    </>
  );
};

export default Alarams;
