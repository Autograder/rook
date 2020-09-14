import React, { useState, useEffect, useContext } from 'react';
import Navbar from '../components/Navbar';
import { ThemeProvider } from '@material-ui/styles';
import OurTheme from '../style/Theme';
import inverseTheme from '../style/Theme';
import Styles from '../style/StudentPageStyle';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    Paper,
    InputLabel,
    MenuItem,
    FormControl,
    Select,
    Button,
    Grid,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField
} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import api from '../conf';
import { Context } from '../context/Context';

function createData( fname: string, lname: string, email: string, status: string, ucext: string) {
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

export default function StudentPage() {
    const theme = OurTheme.theme;
    const classes = Styles.useStyles();
    const [sect, setSect] = useState('');
    const [open, setOpen] = useState(false);
    const [userID, setUserID] = useState(0);
    const [courseID, setCourseID] = useState(0);
    const [sectID, setSectID] = useState(0);
    const [edit, setEdit] = useState(false);
    const [students, setStudents] = useState([]);
    const { state: {userId} } = useContext(Context);

    console.log('student page', userId);
    
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setEdit(false);
    };


    const handleChange = (event: any) => {
        setSect(event.target.value);
    };

    const handleEditStudent = () => {
        setEdit(true);
    };

    const EventHandleNewStudent = async(userID: any, sectID: any, courseID: any) => { //would value get read as an int from the input??
        setOpen(false);
        let apiBaseUrl : string = '/api/enroll_course/enroll_user';
        let payload : object = {
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
        let apiBaseUrl: string = '/api/enroll_course/get_all_user_in_course';
        api.get(apiBaseUrl)
            .then((response) => {
                setStudents(response.data.result.filter((user:any) => user.user_info));
            });
    }, []);

    if (!userId) {
        return <Typography> You must be logged in! </Typography>
    }
   
    return (
        <div>
            <ThemeProvider theme={theme}>
                <Navbar />
                <h1 className={classes.title}>Students</h1>
                <Grid container spacing={3}>
                    <Grid item xs={4}>
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
                            <Button color={'secondary'} variant='contained'>Update Roster</Button>
                            
                        </div>
                    </Grid>

                    <Grid item xs={8}>
                        <div className={classes.container}>
                            <TableContainer component={Paper}>
                                <Table className={classes.table} aria-label="simple table">
                                    <TableHead>
                                        <TableRow style={{background :"#d1dae3"}}>
                                            <TableCell className={classes.col} align="center">Edit</TableCell>
                                            
                                            <TableCell className={classes.col} align="right">First Name</TableCell>
                                            <TableCell className={classes.col} align="right">Last Name</TableCell>
                                            <TableCell className={classes.col} align="right">Email</TableCell>
                                            <TableCell className={classes.col} align="right">Status</TableCell>
                                            <TableCell className={classes.col} align="right">UC Extension</TableCell>
                                            
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map((row, index) => (
                                            <TableRow key={row.fname} style ={ index % 2 ? { background : "#d1dae3" }:{ background : "white"}} >
                                                <TableCell align="center">
                                                    <IconButton aria-label="edit" onClick={handleEditStudent}>
                                                        <EditIcon fontSize="small" />
                                                    </IconButton>
                                                </TableCell>
                                                
                                                <TableCell className={classes.cell} align="right" component="th" scope="row">
                                                    {row.fname}
                                                </TableCell>
                                                <TableCell className={classes.cell} align="right">{row.lname}</TableCell>
                                                <TableCell className={classes.cell} align="right">{row.email}</TableCell>
                                                <TableCell className={classes.cell} align="right">{row.status}</TableCell>
                                                <TableCell className={classes.cell} align="right">{row.ucext}</TableCell>
                                                
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