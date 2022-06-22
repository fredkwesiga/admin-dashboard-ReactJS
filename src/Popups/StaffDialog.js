import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import CreateIcon from '@mui/icons-material/Create';
import { Check, Close } from '@material-ui/icons';
import { useStyles } from '../styles';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

function Title({ row }) {
  const [isEdit, setIsEdit] = useState(false);
  const [fullname, setFullName] = useState(row.name);

  if (isEdit) {
    return (
      <div>
        <input
          value={fullname}
          onChange={(e) => {
            setFullName(e.target.value);
          }}
        />
        <Close
          onClick={() => {
            setFullName(row.name);
            setIsEdit(false);
          }}
        >
          Cancel
        </Close>
        <Check
          onClick={() => {
            // update title api call
            const body = {
              staffID: row.id,
              row: {
                id: row.id,
                fullname: fullname,
              },
            };
            const handleEdit = async (id) => {
              try {
                await api.put(`/staff`, body);
              } catch (err) {
                console.log(`Error: ${err.message}`);
              }
            };
            handleEdit(row.id);
            row.name = fullname;
            setIsEdit(false);
          }}
        >
          {' '}
          Save{' '}
        </Check>
      </div>
    );
  }

  return (
    <div>
      {row.name}
      <CreateIcon onClick={() => setIsEdit(true)}>Edit </CreateIcon>
    </div>
  );
}

export default function CustomizedDialogs({ row, handleEdit }) {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  //   const [editing, setEditing] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div key={row.id}>
      <VisibilityIcon
        style={{ color: '#FA2222' }}
        variant="outlined"
        onClick={handleClickOpen}
      ></VisibilityIcon>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <div style={{ marginBottom: 'none' }}>
          <BootstrapDialogTitle
            id="customized-dialog-title"
            onClose={handleClose}
          >
            <img
              src={row.image}
              alt=""
              style={{ width: '30%', height: '30%', borderRadius: 'none' }}
            />
            {/* {row.name} */}
          </BootstrapDialogTitle>
          <BootstrapDialogTitle
            id="customized-dialog-title"
            onClose={handleClose}
          >
            <Title row={row} />
          </BootstrapDialogTitle>
        </div>
        <DialogContent dividers>
          <h3>Role</h3>
          <Typography gutterBottom>{row.doctorsDetails}</Typography>
        </DialogContent>
        {/* <DialogActions>
          <Button autoFocus onClick={() => setIsEdit(true)}>
            Save changes
          </Button>
        </DialogActions> */}
      </BootstrapDialog>
    </div>
  );
}