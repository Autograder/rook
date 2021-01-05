import React, { useState, useEffect }  from 'react';
import api from '../conf';
import Navbar from './Navbar';
import { ThemeProvider } from '@material-ui/styles';
import OurTheme from '../style/Theme';
import inverseTheme from '../style/Theme';
import Styles from '../style/StaffPageStyle';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import KeyboardArrowDownRoundedIcon from '@material-ui/icons/KeyboardArrowDownRounded';
import KeyboardArrowUpRoundedIcon from '@material-ui/icons/KeyboardArrowUpRounded';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';


function createData( fname, lname, email) {
  return { fname, lname, email};
}

const InstrHeaders = [
    {field: 'fname', label: 'First Name'},
    {field: 'lname', label: 'Last Name'},
    {field: 'email', label: 'Email'},
    {field: 'demote', label: 'Demote'},
    {field: 'edit', label: 'Edit'},]

const GradHeaders = [
    {field: 'fname', label: 'First Name'},
    {field: 'lname', label: 'Last Name'},
    {field: 'email', label: 'Email'},
    {field: 'promote', label: 'Promote'},
    {field: 'edit', label: 'Edit'},
    ]

let InstrTable = [createData('Sravya', 'Balasa', 'sbalasa@ucsd.edu'),
                    createData('Simonne', 'Contreras', 'sccontre@ucsd.edu'),
                    createData('Shaeli', 'Yao', 's3yao@ucsd.edu'),
                    createData('Tiffany', 'Meng', 'tmeng@ucsd.edu'),
                    createData('Savannah', 'Collyer', 'scollyer@ucsd.edu'),
                    createData('McKenna', 'Lewis', 'mlewis@ucsd.edu'),
                    createData('Nicholas', 'Taylor', 'nmtaylor@ucsd.edu'),
                    createData('Nandini', 'Kapa', 'nkapa@ucsd.edu')];

let GradTable = [createData('Nate', 'Browne', 'nbrowne@ucsd.edu'),
                 createData('Nour', 'Yehia', 'nour@ucsd.edu'),
                 createData('Gary', 'Gillespie', 'ggillespie@ucsd.edu'),
                 createData('Mihai', 'Vaduva', 'mihai@ucsd.edu'),
                 createData('Yixuan', 'Zhou', 'yixuan@ucsd.edu'),
                 createData('Allen', 'Ordoo', 'allen@ucsd.edu')];

export default function StaffPageTab() {
    const theme = OurTheme.theme;
    const classes = Styles.useStyles();
    const [open, setOpen] = React.useState(false);
    const [userID, setUserID] = React.useState(0);
    const [courseID, setCourseID] = React.useState(0);
    const [sectID, setSectID] = React.useState(0);

    const [instructors, setInstructors] = React.useState([]);
    const [graders, setGraders] = React.useState([]);

    const handleAddGradRow = (f, l, e) =>{
        const item = {
          first: f,
          last: l,
          email: e,
        };
        setGraders([...graders,createData(f,l,e)]);
      };

      const handleAddInstRow = (f, l, e) =>{
        const item = {
          first: f,
          last: l,
          email: e,
        };
        setInstructors([...instructors,createData(f,l,e)]);
      };

      const handleRemoveInstrRow = (idx) => {
        const row = [...instructors];
        row.splice(idx, 1);
        setInstructors(row);
      }

      const handleRemoveGradRow = (idx) => {
        const row = [...graders];
        row.splice(idx, 1);
        setGraders(row);
      }

      //handleAddRow(first, last, email);
      const handleDemoteButton = (first, last, email, idx) =>{
        let apiBaseUrl = '/api/enrolled_course/change_role';
        let payload = {
            "user_id": 3,
            "course_id": 1,
            "role": "GRADER",
          };
        api.post(apiBaseUrl, payload) 
        .then ( function (response) {
            // Direct to queue page
            console.log("Role Change successfull");
            handleRemoveInstrRow(idx);
            handleAddGradRow(first, last, email);
          })
        .catch(function (error) {
            console.log("Error");
        });
      };

      const handlePromoteButton = (first, last, email, idx) =>{
        let apiBaseUrl = '/api/enrolled_course/change_role';
        let payload = {
            "user_id": 3,
            "course_id": 1,
            "role": "INSTRUCTOR",
          };
        api.post(apiBaseUrl, payload) 
        .then ( function (response) {
            // Direct to queue page
            console.log("Role Change successfull");
            handleRemoveGradRow(idx);
            handleAddInstRow(first, last, email);
          })
        .catch(function (error) {
            console.log("Error");
        });
      };

    const handleClose = () => {
        setOpen(false);
    };


    const handleClickOpen = () => {
        setOpen(true);
    };

    const getStripedStyle = (index) => {
        return (index % 2) ? { background : "#d1dae3" }:{ background : "white" }
    }

    useEffect(() => {
        let apiBaseUrl = '/api/enrolled_course/get_all_user_in_course';
        let arr = []
        let arr2 = []
        api.get(apiBaseUrl, {params: {course_id: 1, roles: "INSTRUCTOR"}})
            .then((response) => {
                arr = response.data.result.filter((user) => user.user_info);
                let stu = []
                for(var i = 0; i < arr.length; i++) {
                    let st = arr[i];
                    stu.push(createData(st.user_info.fname, st.user_info.lname, st.user_info.email));
                }
                setInstructors(stu);
            });
        api.get(apiBaseUrl, {params: {course_id: 1, roles: "GRADER"}})
            .then((response) => {
                arr2 = response.data.result.filter((user) => user.user_info);
                let stu = []
                for(var i = 0; i < arr2.length; i++) {
                    let st = arr2[i];
                    stu.push(createData(st.user_info.fname, st.user_info.lname, st.user_info.email));
                }
                setGraders(stu);
            });
    }, []);


    const renderCells = (row, index) => {
        return (
            InstrHeaders.map((header) => {
                return (header.field === 'edit') 
                ? (<TableCell align="center">
                        <IconButton aria-label="edit">
                            <EditIcon fontSize="small" />
                        </IconButton>
                    </TableCell>)
                : (header.field === 'demote')
                ? (<TableCell className={classes.cell} align="center">
                        <IconButton  onClick={() => handleDemoteButton(row.fname, row.lname, row.email, index)}aria-label="demote button">
                            <ArrowDownwardIcon style={{fontSize: "small"}}/>
                        </IconButton>
                    </TableCell>)
                :(<TableCell className={classes.cell} align="left">{row[header.field]}</TableCell>)
            })
        )}

        const renderCells2 = (row, index) => {
            return (
                GradHeaders.map((header) => {
                    return (header.field === 'edit') 
                    ? (<TableCell align="center">
                            <IconButton aria-label="edit">
                                <EditIcon fontSize="small" />
                            </IconButton>
                        </TableCell>)
                    : (header.field === 'promote')
                    ?(<TableCell className={classes.cell} align="center">
                            <IconButton onClick={() => handlePromoteButton(row.fname, row.lname, row.email, index)} aria-label="demote button">
                                <ArrowUpwardIcon style={{fontSize: "small"}}/>
                            </IconButton>
                        </TableCell>)
                    :(<TableCell className={classes.cell} align="left">{row[header.field]}</TableCell>)
                })
            )}
   
    return (
        <div>
            <ThemeProvider theme={theme}>
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
                        <div>
                        <h2 className={classes.h2}>INSTRUCTORS</h2>
                        <Grid className={classes.rightCol} item xs={6}>
                            <TableContainer className={classes.iTable} component={Paper}>
                                    <Table  stickyHeader className={classes.iTable} size="small" aria-label="sticky table">
                                        <TableHead>
                                            <TableRow style={{background :"#d1dae3"}}>
                                                {InstrHeaders.map((header) => (header.field==='edit' || header.field==='demote')? (<TableCell align="center" className={classes.col}>
                                                                        {header.label}
                                                                    </TableCell>) :(<TableCell align="left" className={classes.col}>
                                                                        {header.label}
                                                                    </TableCell>))}
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {instructors.map((row, index) => (
                                                <TableRow style ={getStripedStyle(index)} >

                                                    {renderCells(row, index)}
                                                    
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                        </Grid> 

                        <h2 className={classes.h2}>GRADERS</h2>
                        <Grid className={classes.rightCol} item xs={6}>
                            <TableContainer className={classes.gTable} component={Paper}>
                                    <Table  className={classes.gTable} size="small" aria-label="a dense table">
                                        <TableHead style={{position:'sticky'}}>
                                        <TableRow style={{background :"#d1dae3"}}>
                                                {GradHeaders.map((header) => (header.field==='edit' || header.field==='promote')? (<TableCell align="center" className={classes.col}>
                                                                        {header.label}
                                                                    </TableCell>) :(<TableCell align="left" className={classes.col}>
                                                                        {header.label}
                                                                    </TableCell>))}
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {graders.map((row, index) => (
                                                <TableRow style ={getStripedStyle(index)} >

                                                    {renderCells2(row, index)}
                                                    
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                        </Grid> 
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