import React from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import OurTheme from '../style/Theme';
import Styles from '../style/TicketFeedbackStyle';

export default function TicketFeedback() {
    const theme = OurTheme.theme;
    const inverseTheme = OurTheme.inverseTheme;
    const classes = Styles.useStyles();
    const headers = [{field: 'date', label: 'Date'},
                     {field: 'student', label: 'Student'},
                     {field: 'tutor', label: 'Tutor'},
                     {field: 'resolved', label: 'Resolved'},
                     {field: 'rating', label: 'Rating'},
                     {field: 'feedback', label: 'Feedback'},
                     {field: 'view', label: 'View'}]
    const rows = [{date: '01-14-20 06:26:25 PM', student: 'Nour Yehia', tutor: 'Shaeli Yao',
                  resolved: 'No', rating: 'Good', feedback: 'A good tutor', id: 767880},
                  {date: '01-14-20 06:26:25 PM', student: 'Nour Yehia', tutor: 'Shaeli Yao',
                  resolved: 'No', rating: 'Good', feedback: 'A good tutor', id: 767880},
                  {date: '01-14-20 06:26:25 PM', student: 'Nour Yehia', tutor: 'Shaeli Yao',
                  resolved: 'No', rating: 'Good', feedback: 'A good tutor', id: 767880},
                  {date: '01-14-20 06:26:25 PM', student: 'Nour Yehia', tutor: 'Shaeli Yao',
                  resolved: 'No', rating: 'Good', feedback: 'A good tutor', id: 767880}]
    const retrieveRows = () => {
        // retrieve rows using axios  based on the user role, rest stays the same 
    }
    const formatRows = () => {
        // once data is retrieved from axios, format dates, etc, correctly
    }
    const viewTicket = (id:any) => {
        // send request using axios to grab information about the ticket and render it
        console.log(id)
    }
    const renderCells = (row:any) => {
        return (
            headers.map((header) => {
                return (header.field !== 'view') 
                        ? (<TableCell>{row[header.field]}</TableCell>)
                        : (<TableCell className={classes.viewTicket} onClick={() => viewTicket(row['id'])}>View Ticket</TableCell>)
            })
        )}
    const getStripedStyle = (index:any) => {
        return (index % 2) ? { background : "#d1dae3" }:{ background : "white" }
    }
    return (
        <div>
            <ThemeProvider theme={theme}>
            <div className={classes.wrapper}>
                {/* <Typography className={classes.title}>Ticket Feedback</Typography> */}
            </div>
            </ThemeProvider>
            <ThemeProvider theme={inverseTheme}>
                <div>
                    <TableContainer component={Paper}>
                        <Table size="small" aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    {headers.map((header) => (<TableCell>
                                                                {header.label}
                                                            </TableCell>))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row:any, index) => <TableRow style ={getStripedStyle(index)}>
                                                                    {renderCells(row)}
                                                            </TableRow>)}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </ThemeProvider>
        </div>
    );
}