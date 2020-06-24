import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    staticicon: {
        color: 'white',
        width : 100,
        'position' : 'relative',
        'left' : '50%',
        'margin-left' : '-50px',
    },
    clickableicon: {
        color: 'white',
        width : 100,
        'position' : 'relative',
        'left' : '50%',
        'margin-left' : '-50px',
        'cursor': 'pointer'
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
    },
    form: {
        // Border of Input Boxes when not clicked
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'black',
            },
        },
    },
    text: {
        color: 'black',
    },
}));  

export default {useStyles};