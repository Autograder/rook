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
    smallContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        marginLeft: 18,
        marginBottom: 18,
        marginRight: 35,
        borderRadius: 5

    },
    activeTutors: {
        marginRight: 33,
        marginLeft: 18,
        marginBottom: 10,
        color: 'white',
        border: 'solid',
        borderWidth: 1,
        borderColor: 'white',
        fontSize: 14,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 5
    }
}));  

export default {useStyles};