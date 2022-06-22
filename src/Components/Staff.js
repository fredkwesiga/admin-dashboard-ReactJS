import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Button } from '@material-ui/core';
import { base_url } from '../Constants/index.js';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import { useState, useEffect } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import EditIcon from '@mui/icons-material/Edit';
import Applayout from './Applayout';
import Staffform from '../Pages/Staffform';
import CustomizedDialogs from '../Popups/StaffDialog.js';

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'Picture',
    label: 'Picture',
  },
  { id: 'Full Names', label: 'Full Names' },
  { id: 'Role', label: 'Role' },
  { id: 'View', label: '' },
  { id: 'Disbale', label: '' },
];

function EnhancedTableHead(props) {
  const {
    classes,
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead style={{ fontSize: '16px' }}>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all desserts' }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: '1 1 100%',
  },
}));

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const { numSelected } = props;

  return (
    <Toolbar style={{ paddingTop: '20px' }}>
      {numSelected > 0 ? (
        <Typography
          className={classes.title}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          className={classes.title}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          MALAIKAH STAFF
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton aria-label="filter list">
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));

export default function EnhancedTable() {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [staff, setStaff] = useState([]);
  const [editing, setEditing] = useState(false);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    axios
      .get(`${base_url}/staff`)
      .then((res) => {
        setStaff(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log({ message: err });
      });
  }, []);

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const rows = staff.filter((staff) => {
    return staff;
  });

  console.log(staff);

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <Applayout>
      <Button
        variant="contained"
        style={{
          backgroundColor: '#fbbb35',
          width: '20%',
          height: '50px',
          marginTop: '5%',
        }}
        href="/staffForm"
      >
        Add New
      </Button>
      <Button
        variant="contained"
        style={{
          backgroundColor: '#d3d3d3',
          width: '20%',
          height: '50px',
          marginTop: '5%',
          marginLeft: '4%',
        }}
      >
        Disable
      </Button>
      <div className={classes.root} style={{ marginTop: '3%' }}>
        {/* {editing ? (
          <Staffform />
        ) : ( */}
        <Paper className={classes.paper}>
          <EnhancedTableToolbar numSelected={selected.length} />
          <TableContainer>
            <Table
              className={classes.table}
              aria-labelledby="tableTitle"
              // size={dense ? 'small' : 'medium'}
              aria-label="enhanced table"
            >
              <EnhancedTableHead
                classes={classes}
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
              />
              <TableBody>
                {stableSort(rows, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const isItemSelected = isSelected(row.name);
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <TableRow
                        hover
                        // onClick={(event) => handleClick(event, row.name)}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.id}
                        selected={isItemSelected}
                      >
                        <TableCell padding="checkbox">
                          <Checkbox
                            checked={isItemSelected}
                            inputProps={{ 'aria-labelledby': labelId }}
                            onChange={(event) => handleClick(event, row.name)}
                          />
                        </TableCell>
                        <TableCell
                          component="th"
                          id={labelId}
                          scope="row"
                          padding="none"
                        >
                          <img src={row.image} alt="" className="staffImage" />
                        </TableCell>

                        <TableCell
                          component="th"
                          id={labelId}
                          scope="row"
                          padding="none"
                          onChange={() => setIsEdit(true)}
                        >
                          {row.name}
                        </TableCell>
                        <TableCell>{row.doctorsDetails}</TableCell>
                        <TableCell align="right">
                          <Button>
                            {' '}
                            <CustomizedDialogs row={row} />{' '}
                          </Button>
                          {/* <VisibilityIcon style={{ color: '#FA2222' }}>
                            <CustomizedDialogs />
                          </VisibilityIcon> */}
                        </TableCell>
                        <TableCell align="right">
                          <DisabledByDefaultIcon />
                        </TableCell>
                        <TableCell align="right"></TableCell>
                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
              {/* <CustomizedDialogs /> */}
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
        {/* )} */}
      </div>
    </Applayout>
  );
}

// import React from 'react';
// import { useStyles } from '../styles';
// import { base_url } from '../Constants/index.js';
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import {
//   Card,
//   TableCell,
//   TableContainer,
//   Table,
//   TableHead,
//   Checkbox,
//   TableBody,
//   TableRow,
//   Button,
// } from '@material-ui/core';
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
// import EditIcon from '@mui/icons-material/Edit';
// import Applayout from './Applayout';

// const Tips = () => {
//     const classes = useStyles();
//     const [tip, setTips] = useState([]);

//      useEffect(() => {
//        axios
//          .get(`${base_url}/tips`)
//          .then((res) => {
//            setTips(res.data);
//            console.log(res.data);
//          })
//          .catch((err) => {
//            console.log({ message: err });
//          });
//      }, []);

//   return (
//     <Applayout>
//       <Button
//         variant="contained"
//         className={classes.AddSpecialitybutton}
//         href="/tipsform"
//       >
//         Add New
//       </Button>
//       <Button variant="contained" className={classes.Disablebutton}>
//         Disable
//       </Button>
//       <div style={{ width: '90%', marginTop: '3%' }}>
//         <TableContainer className={classes.table}>
//           <Card>
//             <Table sx={{ minWidth: 650 }} aria-label="simple table">
//               <TableHead>
//                 <TableRow>
//                   <TableCell padding="checkbox">
//                     <Checkbox color="primary" />
//                   </TableCell>
//                   <TableCell>Tip Title</TableCell>
//                   <TableCell>Tip Content</TableCell>
//                   <TableCell></TableCell>
//                   <TableCell></TableCell>
//                   <TableCell></TableCell>
//                 </TableRow>
//               </TableHead>
//               {tip.map((tip_entity) => (
//                 <TableBody>
//                   <TableRow>
//                     <TableCell padding="checkbox">
//                       <Checkbox color="primary" />
//                     </TableCell>

//                     <TableCell>{tip_entity.title}</TableCell>
//                     <TableCell>{tip_entity.description}</TableCell>
//                     <TableCell>
//                       <EditIcon style={{ color: '#FA2222' }} />
//                     </TableCell>
//                     <TableCell>
//                       <VisibilityIcon />
//                     </TableCell>
//                     <TableCell>
//                       <DisabledByDefaultIcon />
//                     </TableCell>
//                   </TableRow>
//                 </TableBody>
//               ))}
//             </Table>
//           </Card>
//         </TableContainer>
//       </div>
//     </Applayout>
//   );
// };

// export default Tips;

// import React, {useState, useEffect} from 'react';
// import { useStyles } from '../styles';
// import {
//   Card,
//   TableCell,
//   TableContainer,
//   Table,
//   TableHead,
//   Checkbox,
//   TableBody,
//   TableRow,
//     Button
// } from '@material-ui/core';
// import axios from 'axios';
// import { base_url } from '../Constants/index.js';
// import Applayout from './Applayout';

// const Staff = () => {
//   const classes = useStyles();

//   const [staff, setStaff] = useState([]);
//   return (
//     <Applayout>
//     <div className="staffTable">
//       <Button
//         variant="contained"
//         className={classes.AddStaffbutton}
//         href="/staffForm"
//       >
//         Add New
//       </Button>
//       <TableContainer className={classes.table}>
//         <Card>
//           <Table sx={{ minWidth: 650 }} aria-label="simple table">
//             <TableHead>
//               <TableRow>
//                 <TableCell padding="checkbox">
//                   <Checkbox color="primary" />
//                 </TableCell>
//                 <TableCell>Picture</TableCell>
//                 <TableCell>Full Name</TableCell>
//                 <TableCell align="right">Role</TableCell>
//                 <TableCell align="right"></TableCell>
//                 <TableCell align="right"></TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               <TableRow>
//                 <TableCell padding="checkbox">
//                   <Checkbox color="primary" />
//                 </TableCell>
//                 <TableCell>
//                   <img
//                     src="https://picsum.photos/100/100?random=1"
//                     alt=""
//                     className="staffImage"
//                   />
//                 </TableCell>
//                 <TableCell component="th" scope="row">
//                   Winnie Kiara
//                 </TableCell>
//                 <TableCell align="right"> Physician </TableCell>
//                 <TableCell align="right"> View </TableCell>
//                 <TableCell align="right"> Disable </TableCell>
//               </TableRow>
//             </TableBody>

//             <TableBody>
//               <TableRow>
//                 <TableCell padding="checkbox">
//                   <Checkbox color="primary" />
//                 </TableCell>
//                 <TableCell>
//                   <img
//                     src="https://picsum.photos/100/100?random=2"
//                     alt=""
//                     className="staffImage"
//                   />
//                 </TableCell>
//                 <TableCell component="th" scope="row">
//                   Winnie Kiara
//                 </TableCell>
//                 <TableCell align="right"> Physician </TableCell>
//                 <TableCell align="right"> View </TableCell>
//                 <TableCell align="right"> Disable </TableCell>
//               </TableRow>
//             </TableBody>

//             <TableBody>
//               <TableRow>
//                 <TableCell padding="checkbox">
//                   <Checkbox color="primary" />
//                 </TableCell>
//                 <TableCell>
//                   <img
//                     src="https://picsum.photos/100/100?random=3"
//                     alt=""
//                     className="staffImage"
//                   />
//                 </TableCell>
//                 <TableCell component="th" scope="row">
//                   Winnie Kiara
//                 </TableCell>
//                 <TableCell align="right"> Physician </TableCell>
//                 <TableCell align="right"> View </TableCell>
//                 <TableCell align="right"> Disable </TableCell>
//               </TableRow>
//             </TableBody>
//           </Table>
//         </Card>
//       </TableContainer>
//     </div>
//     </Applayout>
//   );
// };

// export default Staff;
