import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Icon, Typography, MenuItem, Select, Box } from "@mui/material";
import PomodoroContext from "../../PomodoroContext";

const AudioPlayer = () => {
  const {
    select,
    selectedTrack,
    alarmRepeatCount,
    setAlarmRepeatCount,
    volume,
    setVolume,
    manualSwitch, setManualSwitch

  } = useContext(PomodoroContext);
  const [initial, setInitial] = useState(true);

  const audioRef = React.useRef(null);

  useEffect(() => {
    if (!initial && !manualSwitch) {
      playAudio();
      
    }
    setManualSwitch(false)
    setInitial(false);
  }, [select]);
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;  // Update volume immediately
    }
  }, [volume]);
  const playAudio = () => {
    if (audioRef.current) {
      let playGames = 0;
      audioRef.current.volume = volume / 100;  // Set the volume before playing
      audioRef.current.play();

      playGames+=1
      
      const playInterval = setInterval(() => {
        if(audioRef.current){

          audioRef.current?.pause();
          audioRef.current.currentTime = 0; // Reset audio to start
          
          
          if (playGames < alarmRepeatCount) {
            audioRef.current?.play();
            playGames += 1;
          } else {
            clearInterval(playInterval);
          }
        }
      }, 4000);
    }
  
  };

  return (
    <Box display="flex" alignItems="center" gap={2}>
      <audio ref={audioRef} src={selectedTrack} />
    </Box>
  );
};

export default AudioPlayer;
