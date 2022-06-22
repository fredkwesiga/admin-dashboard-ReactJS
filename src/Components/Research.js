import React, {useState, useEffect} from 'react';
import { Checkbox, Grid, Button } from '@material-ui/core';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import Applayout from './Applayout';
import { useStyles } from '../styles';
import axios from 'axios';
import { base_url } from '../Constants/index.js';


const Research = () => {
  const classes = useStyles();
  const [research, setResearch] = useState([]);

  useEffect(() => {
    axios
      .get(`${base_url}/research`)
      .then((res) => {
        setResearch(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log({ message: err });
      });
  }, []);

  return (
    <Applayout>
      <Button
        variant="contained"
        className={classes.AddSpecialitybutton}
        href="/researchform"
      >
        Add New
      </Button>
      <Button variant="contained" className={classes.Disablebutton}>
        Disable
      </Button>
      {research.map((research) => (
        <div style={{ width: '90%', marginTop: '3%' }}>
          <Card sx={{ display: 'flex' }} className={classes.eventsCard}>
            <Grid style={{ marginTop: '5%' }}>
              <Checkbox color="primary" />
              <EditIcon style={{ color: '#0A1F3E', marginTop: '50%' }} />
            </Grid>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                  {research.title}
                </Typography>
                <Typography component="div" variant="subtitle1">
                  {research.date}
                </Typography>

                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  <div style={{height: '150px', overflow:'scroll' }}>{research.content}</div>
                </Typography>
              </CardContent>
            </Box>
          </Card>
        </div>
      ))}
    </Applayout>
  );
};


export default Research;