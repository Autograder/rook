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
    dropdown : {
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
        color: '#464655',
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
    formControl : {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    dialogue: {
        color: '#464655',
        paddingLeft: '10px',
    },
    floatingLabelFocusStyle: {
        color: '#464655',
        paddingLeft: '10px',
        "&:hover": {
            borderColor: "#46455",
        }
    },
    input: {
        color: '#464655',
        paddingLeft: '10px',
        paddingBottom: '10px',

        
    }
}));

export default {useStyles};