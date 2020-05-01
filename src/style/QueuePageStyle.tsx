import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    icon: {
        color: 'white',
        width : 100,
        'position' : 'relative',
        'left' : '50%',
        'margin-left' : '-50px',
    },
    overflow: {
        overflowY: "scroll",
        flex: 1,
    },
    container: {
        display: "flex",
        flexDirection: "row",
        height: "100vh",
    },
    body: {
        position: "fixed",
        width: "100%",
    }
}));  

export default {useStyles};