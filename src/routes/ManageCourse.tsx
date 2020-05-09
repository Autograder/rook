import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import OurTheme from '../style/Theme';
import Styles from '../style/ManageCourseStyle';
import Grid from '@material-ui/core/Grid'
import { ThemeProvider, withStyles } from '@material-ui/styles'
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownRoundedIcon from '@material-ui/icons/KeyboardArrowDownRounded';
import KeyboardArrowUpRoundedIcon from '@material-ui/icons/KeyboardArrowUpRounded';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


export default function ManageCourse(){
    const theme = OurTheme.theme;
    const classes = Styles.useStyles();

    function createData(first: any, last: any, email: any) {
        return {first, last, email};
    }

    let rowsTable = [createData('Sravya', 'Balasa', 'sbalasa@ucsd.edu'),
    createData('Simonne', 'Contreras', 'sccontre@ucsd.edu'),
    createData('Shaeli', 'Yao', 's3yao@ucsd.edu'),
    createData('Tiffany', 'Meng', 'tmeng@ucsd.edu'),
    createData('Savannah', 'Collyer', 'scollyer@ucsd.edu'),
    createData('McKenna', 'Lewis', 'mlewis@ucsd.edu'),
    createData('Nicholas', 'Taylor', 'nmtaylor@ucsd.edu'),
    createData('Nandini', 'Kapa', 'nkapa@ucsd.edu')]

    const [rows, setRow] = React.useState(rowsTable);

    let rows2Table = [createData('Nate', 'Browne', 'nbrowne@ucsd.edu'),
                 createData('Nour', 'Yehia', 'nour@ucsd.edu'),
                 createData('Gary', 'Gillespie', 'ggillespie@ucsd.edu'),
                 createData('Mihai', 'Vaduva', 'mihai@ucsd.edu'),
                 createData('Yixuan', 'Zhou', 'yixuan@ucsd.edu'),
                 createData('Allen', 'Ordoo', 'allen@ucsd.edu')]
    
    const [rows2, setRow2] = React.useState(rows2Table);

    const [state, setState] = React.useState({
        queue: false,
        status: false,
        lock: false,
        lab: false,
      });

    const [enable, setEnable] = React.useState({
        queue: "disabled",
        status: "disabled",
        lock: "disabled",
        lab: "disabled",
      });

    const MySwitch = withStyles({
        switchBase: {
          color: "#5a5a5a",
          '&$checked': {
            color: "#5ECA6F",
          },
          '&$checked + $track': {
            backgroundColor: "#5ECA6F",
          },
        },
        checked: {},
        track: {},
      })(Switch);

    const handleChange = (event: any) =>{
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    function FormRow(props:any) {
        return (
          <React.Fragment>
            <Grid  item xs={6}>
        <Paper elevation={0} className={classes.paper}>{props.title}</Paper>
            </Grid>
            <Grid  item xs={6}>
        <Paper elevation={0} className={classes.paper2}>{props.info}</Paper>
            </Grid>
          </React.Fragment>
        );
      }

      function FormRow2(props:any) {
          return (
              
            <React.Fragment>
            <Grid  item xs={12}  >
            <FormControlLabel  labelPlacement="start" 
          control={<MySwitch color="secondary" checked={props.checked} onChange={handleChange} name={props.name}/>} label={<Typography className={classes.switchLabel}>{props.title}</Typography>}
                /> 
            </Grid>
                
          </React.Fragment>
          
          );
      }
      const handleAddGradRow = (f: any, l: any, e: any) =>{
        const item = {
          first: f,
          last: l,
          email: e,
        };
        setRow2([...rows2,createData(f,l,e)]);
      };

      const handleAddInstRow = (f: any, l: any, e: any) =>{
        const item = {
          first: f,
          last: l,
          email: e,
        };
        setRow([...rows,createData(f,l,e)]);
      };

      const handleRemoveInstrRow = (idx: any) => {
        const row = [...rows];
        row.splice(idx, 1);
        setRow(row);
      }

      const handleRemoveGradRow = (idx: any) => {
        const row = [...rows2];
        row.splice(idx, 1);
        setRow2(row);
      }

      //handleAddRow(first, last, email);
      const handleDemoteButton = (first: any, last: any, email: any, idx: any) =>{
        handleRemoveInstrRow(idx);
        handleAddGradRow(first, last, email);
      };

      const handlePromoteButton = (first: any, last: any, email: any, idx: any) =>{
        handleRemoveGradRow(idx);
        handleAddInstRow(first, last, email);
      };

    return(
        <div>
            <ThemeProvider theme={theme}>
                <Navbar />
                <h1 className={classes.title}>Manage Course</h1>
                <Grid container spacing={3}>
                    <Grid  item xs={6}>
                        <h2 className={classes.h2}>COURSE INFO</h2>
                        <Grid container spacing={2}>
                            <FormRow title='Course Name:' info='Software Tools & Techniques' />
                        </Grid>
                        <Grid container spacing={2}>
                            <FormRow title='Code:' info='CSE15L'/>
                        </Grid>
                        <Grid container spacing={2}>
                            <FormRow title='Quarter:' info='Spring'/>
                        </Grid>
                        <Grid container spacing={2}>
                            <FormRow title='Year:' info='2020'/>
                        </Grid>
                        <br/>
                        <br/>
                        <h2 className={classes.h2}>SETTINGS</h2>
                        <Grid container spacing={2}>
                            <FormRow2 title='Course Status:' name="status" checked={state.status} label={enable.status}/>
                        </Grid>
                        <Grid container spacing={2}>
                            <FormRow2 title='Queue:' name="queue" checked={state.queue} label={enable.queue}  />
                        </Grid> 
                        <Grid container spacing={2}>
                            <FormRow2 title='Lock Queue Button:' name="lock" checked={state.lock} label={enable.lock} />
                        </Grid>
                        <Grid container spacing={2}>
                            <FormRow2 title='Using CSE Labs:'name="lab" checked={state.lab} label={enable.lab} />
                        </Grid>
      
                    </Grid>

                    <div>
                        <h1 className={classes.tablelabel}>Instructors</h1>
                        <Grid className={classes.rightCol} item xs={6}>
                            <TableContainer className={classes.iTable} component={Paper}>
                                    <Table stickyHeader className={classes.iTable} size="small" aria-label="sticky table">
                                        <TableHead>
                                            <TableRow style={{background :"#c3d4d9"}}>
                                                <TableCell className={classes.col}>First Name</TableCell>
                                                <TableCell className={classes.col}>Last Name</TableCell>
                                                <TableCell className={classes.col}>Email</TableCell>
                                                <TableCell className={classes.col}>Demote</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {rows.map((row, index) => (
                                                <TableRow key={row.email} style={ index % 2 ? { background : "white" }:{ background : "#c3d4d9" }}>
                                                    <TableCell className={classes.cell} component="th" scope="row">
                                                        {row.first}
                                                    </TableCell>
                                                    <TableCell className={classes.cell} align="left">{row.last}</TableCell>
                                                    <TableCell className={classes.cell} align="left">{row.email}</TableCell>
                                                    <TableCell className={classes.cell} align="left">
                                                        <IconButton  onClick={() => handleDemoteButton(row.first, row.last, row.email, index)}aria-label="demote button">
                                                            <KeyboardArrowDownRoundedIcon style={{fontSize: "small"}}/>
                                                        </IconButton>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                        </Grid> 

                        <h1 className={classes.tablelabel}>Graders</h1>
                        <Grid className={classes.rightCol} item xs={6}>
                            <TableContainer className={classes.gTable} component={Paper}>
                                    <Table stickyHeader className={classes.gTable} size="small" aria-label="a dense table">
                                        <TableHead>
                                            <TableRow style={{background :"#c3d4d9"}}>
                                                <TableCell className={classes.col}>First Name</TableCell>
                                                <TableCell className={classes.col}>Last Name</TableCell>
                                                <TableCell className={classes.col}>Email</TableCell>
                                                <TableCell className={classes.col}>Promote</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {rows2.map((row, index) => (
                                                <TableRow key={row.first} style ={ index % 2 ? { background : "white" }:{ background : "#c3d4d9" }}>
                                                    <TableCell className={classes.cell} component="th" scope="row">
                                                        {row.first}
                                                    </TableCell>
                                                    <TableCell className={classes.cell} align="left">{row.last}</TableCell>
                                                    <TableCell className={classes.cell} align="left">{row.email}</TableCell>
                                                    <TableCell className={classes.cell} align="left">
                                                        <IconButton onClick={() => handlePromoteButton(row.first, row.last, row.email, index)} aria-label="demote button">
                                                            <KeyboardArrowUpRoundedIcon style={{fontSize: "small"}}/>
                                                        </IconButton>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                        </Grid> 
                    </div>
                </Grid>
            </ThemeProvider>

        </div>
    );
} 