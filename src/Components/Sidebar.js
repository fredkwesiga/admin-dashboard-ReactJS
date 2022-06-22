import React from "react";
import StarsRoundedIcon from '@mui/icons-material/StarsRounded';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonSearchOutlinedIcon from '@mui/icons-material/PersonSearchOutlined';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CommentIcon from '@mui/icons-material/Comment';
import ReplyIcon from '@mui/icons-material/Reply';
import LogoutIcon from '@mui/icons-material/Logout';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import {useStyles} from '../styles';


const Sidebar = () => {
  const classes = useStyles();
  return (
    <div className={classes.sidebar}>
      <img
        src={'../images/whitelogo-01.png'}
        style={{}}
        className={classes.pic}
      />
      <div className={classes.link}>
        <DashboardIcon />
        <a href="/dashboard">
          <h3 className={classes.link}> Dashboard</h3>
        </a>
      </div>
      <div className={classes.link}>
        <StarsRoundedIcon />
        <a href="/specialty">
          <h3 className={classes.link}>Specialties</h3>
        </a>
      </div>
      <div className={classes.link}>
        <PersonSearchOutlinedIcon />
        <a href="/research">
          <h3 className={classes.link}>Research</h3>
        </a>
      </div>
      <div className={classes.link}>
        <EventAvailableOutlinedIcon />
        <a href="/events">
          <h3 className={classes.link}>Events</h3>
        </a>
      </div>
      <div className={classes.link}>
        <PeopleAltIcon />
        <a href="/staff">
          <h3 className={classes.link}>Staff</h3>
        </a>
      </div>
      <div className={classes.link}>
        <CommentIcon />
        <a href="/comments">
          <h3 className={classes.link}>Comments</h3>
        </a>
      </div>
      <div className={classes.link}>
        <ReplyIcon />
        <a href="/replies">
          <h3 className={classes.link}>Replies</h3>
        </a>
      </div>
      <div className={classes.link}>
        <TipsAndUpdatesIcon />
        <a href="/tips">
          <h3 className={classes.link}>Tips</h3>
        </a>
      </div>
      <div className={classes.link}>
        <LogoutIcon />
        <a href="/">
          <h3>Log Out</h3>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
