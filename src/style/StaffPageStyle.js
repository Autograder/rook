import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    title : {
        color: 'white',
        'font-size': '40px',
        //paddingLeft: '100px',
    },
    h2 : {
        color: 'white',
        //paddingLeft: '100px',
    },
    information: {
        color: 'white',
        //paddingLeft: '130px',
        paddingBottom: '10px',
    },
    buttons: {
       // paddingLeft: '120px',
        flexDirection: 'column',
        '& > *': {
        margin: theme.spacing(2),
        },
    },
    table : {
        minWidth: 650,
    },
    container : {
        paddingTop: 50,
        //paddingLeft: '50px',
        //paddingRight: '100px',
    },
    cell : {
        color: '#464655',
    },
    col : {
        color: '#464655',
        fontWeight: 'bold',
        backgroundColor :"#d1dae3"
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

        
    },
    tablelabel: {
        fontSize: 20,
        color: 'white',
      },
    rightCol : {
        topPadding: 500,
    },
    iTable : {
        minWidth: 800,
        maxHeight: 290,
        position: 'sticky',
    },
    gTable : {
        minWidth: 800,
        maxHeight: 400,
    },
}));

export default { useStyles };