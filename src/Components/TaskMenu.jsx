import * as React from 'react';
import { useContext } from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import { useTheme } from "@mui/material/styles";
import PomodoroContext from '../PomodoroContext';
import Task from './Task';


export default function TaskMenu() {
  const { Tasks, setTasks, } =
  useContext(PomodoroContext);
  const theme=useTheme()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const ClearFinishedTasks=()=>{
  let updatedTasks=Tasks.filter((task)=>task.taskComplete==false)
  setTasks(updatedTasks)
  handleClose()
  }
  const ClearAllTasks=()=>{
  setTasks([])
  handleClose()
  }
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
      
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
        
              <Box
             
         
             justifyContent={"center"}
             alignContent={"center"}
             alignItems={"center"}
             textAlign={"center"}
             height={"45px"}
             width={"45px"}
             // border={`2px solid ${theme.palette.setting.secondary}`}
             backgroundColor={theme.palette.background.primary}
             borderRadius={1}
           >
             <Typography
               display={"flex"}
               justifyContent={"center"}
               alignContent={"center"}
            //  backgroundColor={"green"}
            //  mt={1.2}
             p={"auto"}
             //  height={"100%"}
               variant="h5" color="white">
               <i color="white" className="nf nf-md-dots_vertical"></i>
             </Typography>
           </Box>

          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={ClearFinishedTasks}>
        <i style={{marginRight:"10px"}} color="white"  className="nf nf-fa-trash_can"></i>

           Clear finished task
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <i style={{marginRight:"10px"}} color="white" className="nf nf-md-check_bold"></i>

           Clear act pomodoros
        </MenuItem>
        <MenuItem onClick={ClearAllTasks}>
        <i style={{marginRight:"10px"}} color="white" className="nf nf-fa-trash_can"></i>

           Clear all  tasks
        </MenuItem>
      
      
      </Menu>
    </React.Fragment>
  );
}
