import React from 'react';
import Navbar from './Navbar';
import OurTheme from '../style/Theme';
import Styles from '../style/ManageCourseStyle';
import Grid from '@material-ui/core/Grid'
import { ThemeProvider } from '@material-ui/styles'
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper'


export default function ManageCourse(){
    const theme = OurTheme.theme;
    const classes = Styles.useStyles();

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
            <Grid  item xs={6}>
                <Paper elevation={0} className={classes.paper}>{props.title}</Paper>
            </Grid>
            <Grid item xs={6}>
          <FormControlLabel control={<Switch color="primary"/>} label="Enabled"
                /> 
            </Grid>
          </React.Fragment>
          );
      }

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
                        <h2 className={classes.h2}>SETTINGS</h2>
                        <Grid container spacing={2}>
                            <FormRow2 title='Course Status:'  />
                        </Grid>
                        <Grid container spacing={2}>
                            <FormRow2 title='Queue:'  />
                        </Grid> 
                        <Grid container spacing={2}>
                            <FormRow2 title='Lock Queue Button:'  />
                        </Grid>
                        <Grid container spacing={2}>
                            <FormRow2 title='Using CSE Labs:'  />
                        </Grid>
                    </Grid>

                    <Grid className={classes.rightCol} item xs={5}>
                        <TableContainer className={classes.table} component={Paper}>
                                <Table stickyHeader className={classes.table} size="small" aria-label="a dense table">
                                    <TableHead>
                                        <TableRow style={{background :"#c3d4d9"}}>
                                            <TableCell className={classes.col}>First Name</TableCell>
                                            <TableCell className={classes.col}>Last Name</TableCell>
                                            <TableCell className={classes.col}>Email</TableCell>
                                            <TableCell className={classes.col}>Demote</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                    </Grid> 
                </Grid>
            </ThemeProvider>

        </div>
    );
} 