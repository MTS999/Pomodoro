import React from "react";
import { createContext, useState } from "react";
import { pomodoroTheme, shortBreakTheme, longBreakTheme } from "./theme";
import { useMemo } from "react";
const PomodoroContext = createContext();

export const PomodoroProvider = ({ children }) => {
  const [pomodoroTime, setPomodoroTime] = useState(11);
  const [shortBreakTime, setShortBreakTime] = useState(11);
  const [longBreakTime, setLongBreakTime] = useState(11);
  const [settingIsOpen, setSettingIsOpen] = useState(false);
  const [longBreakIntervals, setLongBreakIntervals] = useState(2);
  const [autoStartBreaks, setAutoStartBreaks] = useState(true);
  const [autoStartPomodoros, setAutoStartPomodoros] = useState(true);
  const [openSetting, setOpenSetting] = useState(false);
  const [autoCheckTasks, setAutoCheckTasks] = useState(true);
  const [autoSwitchTasks, setAutoSwitchTasks] = useState(true);
  const [currentTaskId, setCurrentTaskId] = useState(1);
  const [select, setSelect] = useState(1);
  const [selectedTrack, setSelectedTrack] = useState("/sounds/kitchen.mp3");
  const [alarmRepeatCount, setAlarmRepeatCount] = useState(2);
  const [volume, setVolume] = useState(0);
console.log(volume);


// console.log("pomodoro",autoCheckT2asks);
// console.log("pomodoro1",autoSwitchTasks);
  const [Tasks,setTasks]=useState([
    {
    id:"1",
    title:"1",
    totalPomodoros: 1,
    notes: "",
    comletetedPomodoro:0,
    taskComplete:false


  },
    {
    id:"2",
    title:"2",
    totalPomodoros: 2,
    notes: "",
    comletetedPomodoro:0,
    taskComplete:false


  },
    {
    id:"3",
    title:"3",
    totalPomodoros: 1,
    notes: "",
    comletetedPomodoro:0,
    taskComplete:false


  }
])
const theme = useMemo(() => {
  switch (select) {
    case 2:
      return shortBreakTheme;
    case 3:
      return longBreakTheme;
    default:
      return pomodoroTheme;
  }
}, [select]);
  // console.log(select);
  return (
    <PomodoroContext.Provider
      value={{
        pomodoroTime,
        setPomodoroTime,
        shortBreakTime,
        setShortBreakTime,
        longBreakTime,
        setLongBreakTime,
        settingIsOpen,
        setSettingIsOpen,
        longBreakIntervals,
        setLongBreakIntervals,
        autoStartBreaks,
        setAutoStartBreaks,
        autoStartPomodoros,
        setAutoStartPomodoros,
        openSetting,
        setOpenSetting,
        Tasks,setTasks,
        currentTaskId, setCurrentTaskId,
        select, setSelect,
        autoCheckTasks, setAutoCheckTasks,
        autoSwitchTasks, setAutoSwitchTasks,
        selectedTrack, setSelectedTrack,
        alarmRepeatCount, setAlarmRepeatCount,
        volume, setVolume,theme
      }}
    >
      {children}
    </PomodoroContext.Provider>
  );
};

export default PomodoroContext;
