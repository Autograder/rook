import React from 'react';
import Navbar from './Navbar';
import { ThemeProvider } from '@material-ui/styles';
import OurTheme from '../style/Theme';
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
    const [sect, setSect] = React.useState('');

    const handleChange = (event: any) => {
        setSect(event.target.value);
    };
   
    return (
        <div>
            <ThemeProvider theme={theme}>
                <Navbar />
                <h1 className={classes.title}>Students</h1>
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <h2 className={classes.h2}>INFO</h2>
                        <div className={classes.menu}>
                            <FormControl className={classes.formControl}>
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
                                </Select>
                            </FormControl>
                            <p>Number of Students: 10</p>
                        </div>

                        <h2 className={classes.h2}>OPTIONS</h2>
                        <div className={classes.root}>
                            <Button variant='contained'>Add Student</Button>
                            <Button variant='contained'>Update Roster</Button>
                            <Button variant='contained'>View Enrollment Requests</Button>
                        </div>
                    </Grid>

                    <Grid item xs={8}>
                        <div className={classes.container}>
                            <TableContainer component={Paper}>
                                <Table className={classes.table} aria-label="simple table">
                                    <TableHead>
                                        <TableRow style={{background :"#c3d4d9"}}>
                                            <TableCell className={classes.col}>First Name</TableCell>
                                            <TableCell className={classes.col} align="right">Last Name</TableCell>
                                            <TableCell className={classes.col} align="right">Email</TableCell>
                                            <TableCell className={classes.col} align="right">Status</TableCell>
                                            <TableCell className={classes.col} align="right">UC Extension</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map((row, index) => (
                                            <TableRow key={row.fname} style ={ index % 2 ? { background : "#c3d4d9" }:{ background : "white" }}>
                                                <TableCell className={classes.cell} component="th" scope="row">
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

            </ThemeProvider>
        </div>
    );
}