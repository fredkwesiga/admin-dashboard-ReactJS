import React from "react";
import Applayout from "./Applayout";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import { Checkbox, Grid, Button } from '@material-ui/core';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';
import { useStyles } from '../styles';

const Comments = () => {
  const classes = useStyles();
  return (
    <Applayout>
      <h1>Verify Comments</h1>
      <div style={{ width: '100%', marginTop: '3%' }}>
        <Card sx={{ display: 'flex' }} className={classes.commentsCard} >
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography component="div" variant="h5">
                COVID 19 Research
              </Typography>
              <Typography
                style={{ width: '10%', marginLeft: '4px' }}
                variant="h6"
              >
                Comment
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                With supporting text below as a natural lead-in to additional
                content. With supporting text below as a natural lead-in to
                additional content. With supporting text below as a natural
                lead-in to additional content. With supporting text below as a
                natural lead-in to additional content.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                className={classes.commentsapproveButton}
                href="/eventsForm"
              >
                Approve
              </Button>
              <Button variant="contained" className={classes.commentsdisableButton}>
                Disable
              </Button>
            </CardActions>
          </Box>
        </Card>
      </div>
    </Applayout>
  );
};

export default Comments;
