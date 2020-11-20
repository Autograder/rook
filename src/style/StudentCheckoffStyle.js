import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    header: {
        color: 'white',
        fontSize : 60,
        paddingLeft: '10%',
    },
    tablediv: {
        maxWidth: '80%',
        paddingLeft: '10%',
    },
    table: {
        justifyContent: 'center',
        maxHeight: 500,
    },
    col : {
        color: 'black',
        fontWeight: 'bold',
        backgroundColor: "#d1dae3"
    },
    cell : {
        color: 'black',
    },
    background: {
        backgroundColor: '#2A667B',
    }
}));

export default {useStyles};