import React, { useState, useContext } from 'react';
import Navbar from '../components/Navbar';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Grid, Button, IconButton } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit';
import { ThemeProvider } from '@material-ui/styles';
import { Context } from '../context/Context';
import OurTheme from '../style/Theme';
import Styles from '../style/StaffPageStyle';

function createData( fname: string, lname: string, email: string, status: string) {
  return { fname, lname, email, status };
}

/* temporary data */
const rows = [
  createData('Shaeli', 'Yao', 's3yao@ucsd.edu', 'Instructor'),
  createData('Sravya', 'Balasa', 'sbalasa@ucsd.edu', 'Instructor'),
  createData('Simonne', 'Contreras', 'sccontre@ucsd.edu', 'Instructor'),
  createData('Tiffany', 'Meng', 'tmeng@ucsd.edu', 'Instructor'),
  createData('Edward', 'Yau', 'edyau@ucsd.edu', 'Instructor'),
  createData('Savannah', 'Collyer', 'scollyer@ucsd.edu', 'Instructor'),
  createData('Niha', 'Bhaskar', 'n2bhaska@ucsd.edu', 'Instructor'),
  createData('Rahul', 'Nemmani', 'rnemmani@ucsd.edu', 'Instructor'),
  createData('Nate', 'Browne', 'nbrowne@ucsd.edu', 'Instructor'),
  createData('Cyanni', 'Yao', 'urmom@ucsd.edu', 'Instructor'),
];

export default function StaffPage() {
    const theme = OurTheme.theme;
    const inverseTheme = OurTheme.inverseTheme;
    const classes = Styles.useStyles();
    const [open, setOpen] = useState(false);
    const [userID, setUserID] = useState(0);
    const [courseID, setCourseID] = useState(0);
    const [sectID, setSectID] = useState(0);
    const {state: {userId}} = useContext(Context);

    const handleClose = () => {
        setOpen(false);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    if (!userId) {
        return <Typography> You must be logged in! </Typography>
    }
   
    return (
        <div>
            <ThemeProvider theme={theme}>
                <Navbar />
                <h1 className={classes.title}>Staff</h1>
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <h2 className={classes.h2}>INFO</h2>
                        <p className={classes.information}>Total Staff: 10</p>
                        <p className={classes.information}>Instructors: 10</p>

                        <h2 className={classes.h2}>OPTIONS</h2>
                        <div className={classes.buttons}>
                            <Button color={'secondary'} variant='contained' onClick={handleClickOpen}>Add Staff</Button>
                            <Button color={'secondary'} variant='contained'>Restore Staff</Button>
                            <Button color={'secondary'} variant='contained'>Import Previous Staff</Button>
                            <Button color={'secondary'} variant='contained'>Delete All Staff</Button>
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
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map((row, index) => (
                                            <TableRow key={row.fname} style ={ index % 2 ? { background : "#d1dae3" }:{ background : "white" }}>
                                                <TableCell align="center">
                                                    <IconButton aria-label="edit">
                                                        <EditIcon fontSize="small" />
                                                    </IconButton>
                                                </TableCell>
                                                <TableCell className={classes.cell} component="th" scope="row">
                                                    {row.fname}
                                                </TableCell>
                                                <TableCell className={classes.cell} align="right">{row.lname}</TableCell>
                                                <TableCell className={classes.cell} align="right">{row.email}</TableCell>
                                                <TableCell className={classes.cell} align="right">{row.status}</TableCell>
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
                        <DialogTitle id="form-dialog-title" className={classes.dialogue}>Add Student</DialogTitle>
                        <DialogContent>
                            <DialogContentText className={classes.dialogue}>
                                Enter student information.                            
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
                            <Button  variant="contained" color="secondary">Add Student</Button>
                        </DialogActions>
                    </Dialog>
                </ThemeProvider>

            </ThemeProvider>
        </div>
    );
}