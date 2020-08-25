import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import OurTheme from '../style/Theme';
import Styles from '../style/StudentCheckoffStyle';
import Navbar from '../components/Navbar';
import SideBar from '../components/SideBar';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export default function StudentCheckoff() {
    const theme = OurTheme.inverseTheme;
    const classes = Styles.useStyles();

    function createData(name: any, due: any, completed: any, grader: any, score: any) {
        return {name, due, completed, grader, score};
    }

    let rowsTable = [createData("Lab 1", "July 1, 1999", "May 12, 2020", "Sravya Balasa", "5/10"),
    createData("Lab 2", "July 4, 2050", "June 6, 2020", "Shaeli Yao", "10/10"),
    createData("Lab 3", "January 2, 2050", "August 5, 2020", "Simonne Contreras", "10/10"),
    createData("Lab 4", "February 20, 2016", "September 8, 2020", "Simonne Contreras", "7/10"),
    createData("Lab 5", "January 6, 2050", "March 18, 2020", "Shaeli Yao", "10/10"),
    createData("Lab 6", "May 15, 2020", "August 5, 2020", "Simonne Contreras", "10/10"),
    createData("Lab 7", "January 2, 2050", "August 5, 2020", "Simonne Contreras", "10/10"),
    createData("Lab 8", "January 2, 2050", "August 5, 2020", "Simonne Contreras", "10/10")]

    return (
        <div className={classes.background}>
            <Sidebar/>
            <ThemeProvider theme={theme}>
            
            <h1 className={classes.header}>My Grades</h1>
            <div className={classes.tablediv}>
             
                    <TableContainer className={classes.table} component={Paper}>
                        <Table stickyHeader className={classes.table} >
                            <TableHead>
                                <TableRow>
                                    <TableCell className={classes.col}>Name</TableCell>
                                    <TableCell className={classes.col}>Due Date</TableCell>
                                    <TableCell className={classes.col}>Completed Date</TableCell>
                                    <TableCell className={classes.col}>Grader</TableCell>
                                    <TableCell className={classes.col}>Score</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rowsTable.map((row, index) => (
                                    <TableRow key={row.name} style ={ index % 2 ? { background : "white" }:{ background : "#c3d4d9" }}> 
                                        <TableCell className={classes.cell} component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell className={classes.cell}  align="left">{row.due}</TableCell>
                                        <TableCell className={classes.cell}  align="left">{row.completed}</TableCell>
                                        <TableCell className={classes.cell}  align="left">{row.grader}</TableCell>
                                        <TableCell className={classes.cell}  align="left">{row.score}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
            </div>
            </ThemeProvider>
        </div>
    );
}