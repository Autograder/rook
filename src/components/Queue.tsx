import React from 'react';
/*import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu'; */

/* const useStyles = makeStyles((theme: Theme) =>
    createStyles({
    root: {
        width: '100%',
    },
    tickets: {
        width: '40%',
    },
    nav : {
        'padding-bottom' : '10px',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        width: '50%',
        'text-align' : 'center',
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
        width: '50%',
        'text-align' : 'center',
    },
    }),
); */

/* <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
<ExpansionPanelSummary
expandIcon={<ExpandMoreIcon />}
aria-controls="panel1bh-content"
id="panel1bh-header"
>
<Typography className={classes.heading}>Sravya Balasa</Typography>
<Typography className={classes.secondaryHeading}>CSE B250</Typography>
</ExpansionPanelSummary>
<ExpansionPanelDetails>
<Typography>
Help I hate this PA
</Typography>
</ExpansionPanelDetails>
</ExpansionPanel> */
export default function Queue() {
    /*const tickets = getCurrentTickets();
    const currentQueue = tickets.map();
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
    };
 */
    return (
    /*<div className={classes.root}>
        <div className={classes.nav}> 
            <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
                </IconButton>
                <Typography variant="h6"> Autograder </Typography>
            </Toolbar>
            </AppBar>
        </div>
        <div className={classes.tickets}>
            {currentQueue}
        </div>
    </div> */
    <div>
        <h1>The Queue</h1>
    </div>
    );
}