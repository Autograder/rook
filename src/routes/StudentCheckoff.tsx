import React, { useState, useEffect } from 'react';
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
import api from '../conf';

const headers = [
    {field: 'name', label: 'Name'},
    {field: 'due', label: 'Due Date'},
    {field: 'completed', label: 'Completed Date'},
    {field: 'grader', label: 'Grader'},
    {field: 'score', label: 'Score'},]

export default function StudentCheckoff() {
    const theme = OurTheme.inverseTheme;
    const classes = Styles.useStyles();
    const [checkoffs, setCheckoffs] = useState([]);

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
    createData("Lab 8", "January 2, 2050", "August 5, 2020", "Simonne Contreras", "10/10"),
    createData("Lab 5", "January 6, 2050", "March 18, 2020", "Shaeli Yao", "10/10"),
    createData("Lab 6", "May 15, 2020", "August 5, 2020", "Simonne Contreras", "10/10"),
    createData("Lab 7", "January 2, 2050", "August 5, 2020", "Simonne Contreras", "10/10"),
    createData("Lab 8", "January 2, 2050", "August 5, 2020", "Simonne Contreras", "10/10")]


    useEffect(() => {
        getStudentGrades();
    }, []);

    function getStudentGrades() {
        let apiBaseUrl : string = '/api/checkoff/get_latest_ce_all_checkoffs_for_student';
        let arr = []
        api.get(apiBaseUrl, {params: {course_id: 1, student_id: 2}})
            .then((response) => {
                console.log(response.data.evals)
                arr = response.data.evals
                let entry = []
                for(var i = 0; i < arr.length; i++) {
                    console.log("here")
                    let item = arr[i];

                    entry.push(createData(item.eval.student_id,"Date", item.eval.checkoff_time, item.eval.grader_id, item.eval.score));
                }
                console.log(entry)
                setCheckoffs(entry);
            });
    }

    const renderCells = (row:any) => {
        return (
            headers.map((header) => {
                return <TableCell className={classes.cell} align="left">{row[header.field]}</TableCell>
            })
        )}
    
    const getStripedStyle = (index:any) => {
        return (index % 2) ? { background : "#d1dae3" }:{ background : "white" }
    }

    return (
        <div className={classes.background}>
            <Navbar/>
            <ThemeProvider theme={theme}>
            
            <h1 className={classes.header}>My Grades</h1>
            <div className={classes.tablediv}>
             
                    <TableContainer className={classes.table} component={Paper}>
                        <Table stickyHeader className={classes.table} >
                            <TableHead>
                                <TableRow>
                                    {headers.map((header) => 
                                        (<TableCell align="left" className={classes.col}>{header.label}</TableCell>))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {checkoffs.map((row, index) => (
                                    <TableRow style ={getStripedStyle(index)} > {renderCells(row)}</TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
            </div>
            </ThemeProvider>
        </div>
    );
}