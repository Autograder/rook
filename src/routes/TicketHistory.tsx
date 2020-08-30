import React from 'react';
import Navbar from '../components/Navbar';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Link } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import OurTheme from '../style/Theme';
import Styles from '../style/TicketHistoryStyle';

export default function TicketHistory() {
    const theme = OurTheme.theme;
    const inverseTheme = OurTheme.inverseTheme;
    const classes = Styles.useStyles();
    const headers = [{field: 'student', label: 'Student'},
                     {field: 'tutor', label: 'Tutor'},
                     {field: 'location', label: 'Location'},
                     {field: 'created', label: 'Created'},
                     {field: 'accepted', label: 'Accepted'},
                     {field: 'resolved', label: 'Resolved'},
                     {field: 'canceled', label: 'Canceled'},
                     {field: 'tags', label: 'Tags'},
                     {field: 'description', label: 'Description'},
                     {field: 'view', label: 'View'}]
    const rows = [ {student: 'Nour Yehia', tutor: 'Sravya Balasa', location: 'B250-3', 
                    created: 'Created Format', accepted: 'Accepted Format', resolved: 'Resolved Format', 
                    canceled: 'Canceled Format', tags: 'Tags Format', description: 'Description',
                    id: 345678},
                    {student: 'Nour Yehia', tutor: 'Sravya Balasa', location: 'B250-3', 
                    created: 'Created Format', accepted: 'Accepted Format', resolved: 'Resolved Format', 
                    canceled: 'Canceled Format', tags: 'Tags Format', description: 'Description',
                    id: 345678},
                    {student: 'Nour Yehia', tutor: 'Sravya Balasa', location: 'B250-3', 
                    created: 'Created Format', accepted: 'Accepted Format', resolved: 'Resolved Format', 
                    canceled: 'Canceled Format', tags: 'Tags Format', description: 'Description',
                    id: 345678} ]
    
    const viewTicket = (id:any) => {
        // send request to grab information about the ticket and render it
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

    return (
        <div>
            <ThemeProvider theme={theme}>
                <Navbar/>
                <div className={classes.wrapper}>
                    <Typography className={classes.title}>Ticket History</Typography>
                </div>
            </ThemeProvider>
            <ThemeProvider theme={inverseTheme}>
                <div>
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    {headers.map((header) => (<TableCell>{header.label}</TableCell>))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row:any) => <TableRow>{renderCells(row)}</TableRow>)}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </ThemeProvider>
        </div>
    );
} 

/* Need to make it resizable for smaller windows */