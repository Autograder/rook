import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        color: 'white',
        height: '97vh',
        paddingTop: '30vh',
        paddingBottom: '30vh',
        paddingRight: '20vh',
        paddingLeft: '20vh'
    },
    title: {
        fontSize: 75,
        fontWeight: 'bold'
    },
    subtitle: {
        fontsize: 25,
        marginBottom: 20
        
    },
    button: {
        fontSize: 10,
        backgroundColor: 'white',
        color: '#2A667B'
    }
}));

export default {useStyles};