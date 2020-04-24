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
    information: {
        color: 'white',
        paddingLeft: '130px',
        paddingBottom: '10px',
    },
    buttons: {
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
        color: '#464655',
    },
    col : {
        color: '#464655',
        fontWeight: 'bold',
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default { useStyles };