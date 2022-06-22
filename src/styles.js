import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#EBE9E8',
    maxWidth: '100%',
    padding: '0',
    margin: '0',
  },
  crdContent: {
    display: 'flex',
    flexWrap: 'wrap',
    columnGap: '10px',
  },
  crds: {
    display: 'flex',
    marginTop: '4%',
    justifyContent: 'space-evenly',
    height: '300px',
    flexWrap: 'wrap',
    columnGap: '10px',
    position: 'relative',
  },
  crd: {
    height: '120px',
    width: '230px',
  },
  table: {
    marginTop: '0',
  },

  //   styling home.js
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: 'white',
    padding: '0 2rem 2rem 2rem',
    textAlign: 'center',
    outline: 'none',
    height: 'auto',
    borderRadius: '8px',
  },
  form: {
    paddingTop: '1.5rem',
  },
  button: {
    backgroundColor: '#fbbb35',
    marginTop: '1rem',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '50%',
  },

  formDiv: {
    backgroundImage: `url("/images/bg-img.jpg")`,
    backgroundSize: 'cover',
    height: '100vh',
    paddingTop: '10%',
  },
  pic: {
    height: '100px',
    width: '100px',
  },

  //   styling RegisterAdmin
  formsDiv: {
    backgroundColor: '#d3d3d3',
    backgroundSize: 'cover',
    height: '100vh',
    paddingTop: '10%',
  },
  //styling the sidebar
  sidebar: {
    backgroundColor: '#0A1F3E',
    color: '#ffffff',
    width: 'auto',
    minWidth: 'auto',
    padding: '3%',
    height: '100%',
    boxShadow:
      'hsla(0, 0%, 0%, 0.14), 0 8px 16px hsla(0, 0%, 0%, 0.12), 0 0 1px 0 hsla(0, 0%, 0%, 0.2)',
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    columnGap: '10px',
    cursor: 'pointer',
    borderRadius: '30px',
    backgroundColor: '0A1F3E',
    '&:hover': {
      color: '#20c997',
    },
  },

  h2: {
    fontWeight: ' bold',
  },

  //   styling the specialties component
  specialtyCard: {
    height: 'auto',
    marginTop: '1%',
  },
  AddSpecialitybutton: {
    backgroundColor: '#fbbb35',
    width: '20%',
    height: '50px',
    marginTop: '5%',
  },
  Disablebutton: {
    backgroundColor: '#d3d3d3',
    width: '20%',
    height: '50px',
    marginTop: '5%',
    marginLeft: '4%',
  },
  //   styling specialty form
  specialityField: {
    backgroundColor: '#ffffff',
  },
  specialityForm: {
    width: '90%',
    margin: '10% auto',
  },
  buttn: {
    backgroundColor: '#fbbb35',
    marginTop: '1rem',
    width: '25%',
  },
  //   styling the events component
  eventsCard: {
    height: '150px',
    marginTop: '1%',
    
  },
  /* styling the staff page */
  AddStaffbutton: {
    backgroundColor: '#fbbb35',
    width: '20%',
    height: '50px',
    marginTop: '5%',
    marginBottom: '3%',
  },
  staffTable: {
    width: '100%',
    marginTop: '5%',
  },
  //styling comments
  commentsCard: {
    height: 'auto',
    width: '100%',
    marginTop: '1%',
  },
  commentsapproveButton: {
    backgroundColor: '#fbbb35',
    width: '10%',
    height: '30px',
    marginTop: '1%',
    marginBottom: '1%',
  },
  commentsdisableButton: {
    backgroundColor: '#d3d3d3',
    width: '10%',
    height: '30px',
    marginTop: '1%',
    marginLeft: '1%',
    marginBottom: '1%',
  },
  // styling the staff pop up
  // staffdialogName: {
  //   fontWeight: 'bold',
  // },
});

export { useStyles };

