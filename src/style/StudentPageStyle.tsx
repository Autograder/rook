import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    title : {
        color: 'white',
        'font-size': '60px',
        paddingLeft: '100px',
    },
    h2 : {
        color: 'white',
        paddingLeft: '100px',
    },
    menu : {
        paddingLeft: '130px',
        paddingBottom: '30px',
        height: '100px',
        width: '200px',
        color: 'white',
    },
    select: {
        '&:before': {
            borderColor: 'white',
        },
        '&:after': {
            borderColor: 'white',
        }
    },
    icon: {
        fill: 'white',
    },
    item : {
        color: 'black',
    },
    root: {
        paddingLeft: '120px',
        flexDirection: 'column',
        '& > *': {
        margin: theme.spacing(2),
        },
    },
    table : {
        minWidth: 650,
    },
    container : {
        paddingLeft: '50px',
        paddingRight: '100px',
    },
    cell : {
        color: 'black',
    },
    col : {
        color: 'black',
        fontWeight: 'bold',
    },
    formControl : {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default {useStyles};