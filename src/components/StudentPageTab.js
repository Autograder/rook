import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { ThemeProvider } from '@material-ui/styles';
import OurTheme from '../style/Theme';
import inverseTheme from '../style/Theme';
import Styles from '../style/StudentPageStyle';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import api from '../conf';
import { create } from 'domain';
//import { useFocusEffect } from '@react-navigation/native';


function createData( fname, lname, email, status, ucext) {
  return { fname, lname, email, status, ucext };
}

/* temporary data */
const rows = [
  createData('Shaeli', 'Yao', 's3yao@ucsd.edu', 'Enrolled', 'No'),
  createData('Sravya', 'Balasa', 'sbalasa@ucsd.edu', 'Enrolled', 'No'),
  createData('Simonne', 'Contreras', 'sccontre@ucsd.edu', 'Enrolled', 'No'),
  createData('Tiffany', 'Meng', 'tmeng@ucsd.edu', 'Enrolled', 'No'),
  createData('Edward', 'Yau', 'edyau@ucsd.edu', 'Enrolled', 'No'),
  createData('Savannah', 'Collyer', 'scollyer@ucsd.edu', 'Enrolled', 'No'),
  createData('Niha', 'Bhaskar', 'n2bhaska@ucsd.edu', 'Enrolled', 'No'),
  createData('Rahul', 'Nemmani', 'rnemmani@ucsd.edu', 'Enrolled', 'No'),
  createData('Nate', 'Browne', 'nbrowne@ucsd.edu', 'Enrolled', 'No'),
  createData('Cyanni', 'Yao', 'urmom@ucsd.edu', 'Enrolled', 'No'),
];

const headers = [
                     {field: 'fname', label: 'First Name'},
                     {field: 'lname', label: 'Last Name'},
                     {field: 'email', label: 'Email'},
                     {field: 'status', label: 'Status'},
                     {field: 'ucext', label: 'UC Extension'},
                     {field: 'edit', label: 'Edit'},]

export default function StudentPageTab() {
    const theme = OurTheme.theme;
    const classes = Styles.useStyles();
    const [sect, setSect] = useState('');
    const [open, setOpen] = useState(false);
    const [userID, setUserID] = useState(0);
    const [courseID, setCourseID] = useState(0);
    const [sectID, setSectID] = useState(0);
    const [edit, setEdit] = useState(false);
    const [students, setStudents] = useState([]);
    
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setEdit(false);
    };


    const handleChange = (event) => {
        setSect(event.target.value);
    };

    const handleEditStudent = () => {
        setEdit(true);
    };

    const EventHandleNewStudent = async(userID, sectID, courseID) => { //would value get read as an int from the input??
        setOpen(false);
        let apiBaseUrl = '/api/enroll_course/enroll_user';
        let payload = {
            "user_id" : userID,
            "section_id" : sectID,
            "course_id" : courseID,
        };

        await api.post(apiBaseUrl,payload)
        .then ( () => {
            console.log("Student added.");
          })
        .catch((error) => {
            console.log("Somethin wrong sis: " + error.response.status);
        });
    };

    useEffect(() => {
        let apiBaseUrl = '/api/enrolled_course/get_all_user_in_course';
        let arr = []
        api.get(apiBaseUrl, {params: {course_id: 1, roles: "STUDENT"}})
            .then((response) => {
                arr = response.data.result.filter((user) => user.user_info);
                let stu = []
                for(var i = 0; i < arr.length; i++) {
                    let st = arr[i];
                    stu.push(createData(st.user_info.fname, st.user_info.lname, st.user_info.email, st.enrolled_user_info.status, "no"));
                }
                setStudents(stu);
            });
    }, []);

    const renderCells = (row) => {
        return (
            headers.map((header) => {
                return (header.field === 'edit') 
                ? (<TableCell align="center">
                <IconButton aria-label="edit" onClick={handleEditStudent}>
                    <EditIcon fontSize="small" />
                </IconButton>
            </TableCell>)
                : (<TableCell className={classes.cell} align="left">{row[header.field]}</TableCell>)
            })
        )}

    const getStripedStyle = (index) => {
        return (index % 2) ? { background : "#d1dae3" }:{ background : "white" }
    }
   
    return (
        <div>
            <ThemeProvider theme={theme}>
            
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        <h2 className={classes.h2}>INFO</h2>
                        <div className={classes.dropdown}>
                            <FormControl variant="filled" className={classes.formControl}>
                                <InputLabel id="demo-simple-select-label">Section</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={sect}
                                onChange={handleChange}
                                className={classes.select}
                                inputProps={{
                                    classes: {
                                        icon: classes.icon,
                                    },
                                }}
                                >
                                    <MenuItem className={classes.item} value={'All'}>All</MenuItem>
                                    <MenuItem className={classes.item} value={'A00'}>A00</MenuItem>
                                    <MenuItem className={classes.item} value={'B00'}>B00</MenuItem>
                                    <MenuItem className={classes.item} value={'C00'}>C00</MenuItem>
                                    <MenuItem className={classes.item} value={'Dropped'}>Dropped</MenuItem>
                                </Select>
                            </FormControl>
                            <p>Number of Students: 10</p>
                        </div>

                        <h2 className={classes.h2}>OPTIONS</h2>
                        <div className={classes.buttons}>
                            <Button color={'secondary'} variant='contained' onClick={handleClickOpen}>Add Student</Button>
                            
                        </div>
                        <div className={classes.buttons}>
                            <Button color={'secondary'} variant='contained'>Update Roster</Button>     
                        </div>
                        
                    </Grid>

                    <Grid item xs={9}>
                    <h2 className={classes.h2}>STUDENTS</h2>
                        <div className={classes.container}>
                            
                            <TableContainer className={classes.table} component={Paper}>
                                <Table stickyHeader size="small" className={classes.table} >
                                    <TableHead>
                                        <TableRow style={{background :"#d1dae3"}}>
                                            {headers.map((header) => (header.field==='edit')? (<TableCell align="center" className={classes.col}>
                                                                    {header.label}
                                                                </TableCell>) :(<TableCell align="left" className={classes.col}>
                                                                    {header.label}
                                                                </TableCell>))}
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {students.map((row, index) => (
                                            <TableRow style ={getStripedStyle(index)} >

                                                {renderCells(row)}
                                                
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    </Grid>
                </Grid>
                
                <ThemeProvider theme={inverseTheme}>
                    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                        <DialogTitle id="form-dialog-title" className={classes.dialogue}>Add Staff</DialogTitle>
                        <DialogContent>
                            <DialogContentText className={classes.dialogue}>
                                Enter new staff information.                            
                            </DialogContentText>
                            <TextField 
                            id="outlined-basic"
                            variant="outlined"
                            label="user id"
                            className={classes.input}
                            onChange = {(event) => setUserID(parseInt(event.target.value))}
                            InputProps={{
                                className: classes.floatingLabelFocusStyle,
                            }}
                            InputLabelProps={{
                                className: classes.floatingLabelFocusStyle,
                            }}
                        
                            />
                            
                            <TextField 
                            id="outlined-basic"
                            variant="outlined"
                            label="section id"
                            className={classes.input}
                            onChange = {(event) => setSectID(parseInt(event.target.value))}
                            InputProps={{
                                className: classes.floatingLabelFocusStyle,
                            }}
                            InputLabelProps={{
                                className: classes.floatingLabelFocusStyle,
                            }}
                            />
                            
                            <TextField 
                            id="outlined-basic"
                            variant="outlined"
                            label="course id"
                            className={classes.input}
                            onChange = {(event) => setCourseID(parseInt(event.target.value))}
                            InputProps={{
                                className: classes.floatingLabelFocusStyle,
                            }}
                            InputLabelProps={{
                                className: classes.floatingLabelFocusStyle,
                            }}
                            />
                            
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} className={classes.dialogue}>Cancel</Button>
                            <Button onClick={(event) => EventHandleNewStudent(userID,sectID,courseID)} variant="contained" color="secondary">Add Student</Button>
                        </DialogActions>
                    </Dialog>
                </ThemeProvider>

                <Dialog open={edit} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title" className={classes.dialogue}>Edit Student</DialogTitle>
                    <DialogContent>
                        <DialogContentText className={classes.dialogue}>
                            Enter student information.                            
                        </DialogContentText>
                        <TextField 
                        id="outlined-basic"
                        variant="outlined"
                        label="first name"
                        className={classes.input}
                        InputProps={{
                            className: classes.floatingLabelFocusStyle,
                        }}
                        InputLabelProps={{
                            className: classes.floatingLabelFocusStyle,
                        }}
                    
                        />
                        
                        <TextField 
                        id="outlined-basic"
                        variant="outlined"
                        label="last name"
                        className={classes.input}
                        InputProps={{
                            className: classes.floatingLabelFocusStyle,
                        }}
                        InputLabelProps={{
                            className: classes.floatingLabelFocusStyle,
                        }}
                        />
                        
                        <TextField 
                        id="outlined-basic"
                        variant="outlined"
                        label="email"
                        className={classes.input}
                        InputProps={{
                            className: classes.floatingLabelFocusStyle,
                        }}
                        InputLabelProps={{
                            className: classes.floatingLabelFocusStyle,
                        }}
                        />
                        
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} className={classes.dialogue}>Cancel</Button>
                        <Button onClick={handleClose} variant="contained" color="secondary">Save</Button>
                    </DialogActions>
                </Dialog>

            </ThemeProvider>
        </div>
    );
}