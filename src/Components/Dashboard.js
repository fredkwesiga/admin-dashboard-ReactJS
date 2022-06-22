

import React from 'react';
import {
  Card,
  CardContent,
  TableCell,
  TableContainer,
  Table,
  TableHead,
  Checkbox,
  TableBody,
  TableRow,
  Typography,

} from '@material-ui/core';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import EventNoteIcon from '@mui/icons-material/EventNote';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import { useStyles } from '../styles.js';
import Applayout from './Applayout'

const Dashboard = (props) => {
  const classes = useStyles();

  return (
    <Applayout>
      <div className={classes.crds}>
        <Card className={classes.crd}>
          <CardContent className={classes.crdContent}>
            <BookOnlineIcon sx={{ fontSize: '50px' }} />
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
              style={{ fontSize: 'larger' }}
            >
              Bookings
            </Typography>
          </CardContent>
        </Card>

        <Card className={classes.crd}>
          <CardContent className={classes.crdContent}>
            <AnalyticsIcon
              style={{ color: '#0A30B9' }}
              sx={{ fontSize: '50px' }}
            />
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
              style={{ fontSize: 'larger' }}
            >
              Users
            </Typography>
          </CardContent>
        </Card>

        <Card className={classes.crd}>
          <CardContent className={classes.crdContent}>
            <EventNoteIcon
              style={{ color: '#FA2222' }}
              sx={{ fontSize: '50px' }}
            />
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
              className="cardTitle"
              style={{ fontSize: 'larger' }}
            >
              Events
            </Typography>
          </CardContent>
        </Card>

        <Card className={classes.crd}>
          <CardContent className={classes.crdContent}>
            <PeopleAltIcon
              style={{ color: '#FBBB35' }}
              sx={{ fontSize: '50px' }}
            />
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
              style={{ fontSize: 'larger' }}
            >
              Staff
            </Typography>
          </CardContent>
        </Card>

        <TableContainer className={classes.table}>
          <Card>
            <Table
              sx={{ minWidth: 650 }}
              aria-label="simple table"
            >
              <TableHead >
                <TableRow>
                  <TableCell padding="checkbox">
                    <Checkbox color="primary" />
                  </TableCell>
                  <TableCell>User</TableCell>
                  <TableCell align="right">Location</TableCell>
                  <TableCell align="right">Activity</TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell padding="checkbox">
                    <Checkbox color="primary" />
                  </TableCell>
                  <TableCell component="th" scope="row">
                    Mark Mukuye
                  </TableCell>
                  <TableCell align="right"> Moroto</TableCell>
                  <TableCell align="right"> Bar hoping</TableCell>
                  <TableCell align="right"> <VisibilityIcon /></TableCell>
                  <TableCell align="right"> <DisabledByDefaultIcon /></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Card>
        </TableContainer>
      </div>
    </Applayout>
  );
};

export default Dashboard;
