import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    resolved: {
        margin: theme.spacing(2),
        backgroundColor: '#3F4B3B',
        'border-radius': '15px 15px 2px',
    },
    returned: {
        margin: theme.spacing(2),
        backgroundColor: '#44633F',
        'border-radius': '15px 15px 2px',
    },
    accepted: {
        margin: theme.spacing(2),
        backgroundColor: '#5A9367',
        'border-radius': '15px 15px 2px',
    },
    edited: {
        margin: theme.spacing(2),
        backgroundColor: '#5CAB7D',
        'border-radius': '15px 15px 2px',
    }, 
    created: {
        margin: theme.spacing(2),
        backgroundColor: '#3E885B',
        'border-radius': '15px 15px 2px', 
    },
    tableCellStatus: { 
        [theme.breakpoints.down(850)]: {
			display: "table-row",
		}, [theme.breakpoints.up(851)]: {
			display: "table-cell"
		},
    },
    tableCellTutor: {
        [theme.breakpoints.down(850)]: {
            display: "table-row",
            textAlign: "left"
		}, [theme.breakpoints.up(851)]: {
            display: "table-cell",
            textAlign: "right"
		},
    },
    tableRow: {
        display: 'table-row',
        width: "100%",
    },
    table: {
        display: 'table',
        width: "100%"
    },
    bold: {
        fontWeight: "bold"
    }
}));  

export default {useStyles};