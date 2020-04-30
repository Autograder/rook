import React from 'react';
import Navbar from '../components/Navbar';
import { ThemeProvider } from '@material-ui/styles';
import OurTheme from '../style/Theme';
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
    const classes = Styles.useStyles();
   
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
                            <Button color={'secondary'} variant='contained'>Add Staff</Button>
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
                                            <TableCell className={classes.col}>First Name</TableCell>
                                            <TableCell className={classes.col} align="right">Last Name</TableCell>
                                            <TableCell className={classes.col} align="right">Email</TableCell>
                                            <TableCell className={classes.col} align="right">Status</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map((row, index) => (
                                            <TableRow key={row.fname} style ={ index % 2 ? { background : "#d1dae3" }:{ background : "white" }}>
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

            </ThemeProvider>
        </div>
    );
}