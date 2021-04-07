import React, { useState, useEffect, useContext } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import OurTheme from '../style/Theme';
import Styles from '../style/StudentCheckoffStyle';
import Navbar from '../components/Navbar';
import { Context } from "../context/Context";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import api from '../conf';
import { useParams } from "react-router-dom";

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
    const { state: {user} } = useContext(Context);
    const { course_id } = useParams();

    function createData(name, due, completed, grader, score) {
        return {name, due, completed, grader, score};
    }

    useEffect(() => {
        getStudentGrades();
    }, []);

    function getStudentGrades() {
        let apiBaseUrl = '/api/checkoff/get_latest_ce_all_checkoffs_for_student';
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

    const renderCells = (row) => {
        return (
            headers.map((header) => {
                return <TableCell className={classes.cell} align="left">{row[header.field]}</TableCell>
            })
        )}
    
    const getStripedStyle = (index) => {
        return (index % 2) ? { background : "#d1dae3" }:{ background : "white" }}
    
    
    if (!user) {
        return <Typography> You must be logged in! </Typography>
    }

    return (
        <div className={classes.background}>
            <Navbar dropdown={true} course_id={parseInt(course_id)} page="STUDENTCHECKOFF"/>
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