import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    icon: {
        "&:hover": {
            backgroundColor: "transparent"
        },
        color: 'white',
        width : 100,
        'position' : 'relative',
        'left' : '50%',
        'margin-left' : '-50px',
        'cursor': 'pointer'
    },
    submit: {
    // Border of Input Boxes when not clicked
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'black',
            },
        },
    },
    title: {
    // Border of Input Boxes when not clicked
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'black',
            },
        },
        textAlign: 'center'
    },
    text: {
        color: 'black',
    },
    check: {
        color: 'black',
    },
    locationfield: {
		marginBottom: '20px'
    },
    tab: {
        width: '50%',
        padding: '10px',
    },
}));  

export default {useStyles};