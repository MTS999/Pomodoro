import * as React from "react";
import { useContext } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import PomodoroContext from "../PomodoroContext";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
import Timer from "./AllSettings/Timer";
import { useTheme } from "@mui/material/styles";
import TaskSetting from "./AllSettings/TaskSetting";
import Alarams from "./AllSettings/Alarams";
import AudioPlayer from "./AllSettings/AudioPlayer";

export default function Setting() {
  const theme = useTheme();
  const { openSetting, setOpenSetting } = useContext(PomodoroContext);

  //   const [open, setOpenSetting] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  const handleClickOpen = () => () => {
    setOpenSetting(true);
    setScroll("paper");
  };

  const handleClose = () => {
    setOpenSetting(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (openSetting) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [openSetting]);

  return (
    <React.Fragment>
      {/* <Button onClick={handleClickOpen("paper")}>scroll=paper</Button> */}
      <Dialog
        open={openSetting}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle
          id="scroll-dialog-title"
          fontWeight={"bold"}
          sx={{
            textAlign: "center",
            // width: "100%",
            margin: "0 auto",
            padding: "16px 24px", // Adjust padding as needed
            color: theme.palette.setting.main,
          }}
        >
          SETTING
        </DialogTitle>
        <DialogContent dividers={scroll === "paper"} sx={{ maxHeight: "60vh" }}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <Timer />
            <Divider
              sx={{
                width: "100%",
                borderBottomWidth: 2, // Adjust the thickness
                borderColor: { color: theme.palette.setting.main }, // Change the color
                marginY: 2, // Adjust the width to fit the parent container
              }}
            />
            <TaskSetting />
            <Divider
              sx={{
                width: "100%",
                borderBottomWidth: 2, // Adjust the thickness
                borderColor: { color: theme.palette.setting.main }, // Change the color
                marginY: 2, // Adjust the width to fit the parent container
              }}
            />
            <Alarams />
        {/* <AudioPlayer/> */}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            sx={{ color: "white", backgroundColor: "black" }}
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            sx={{ color: "white", backgroundColor: "black" }}
            onClick={handleClose}
          >
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
