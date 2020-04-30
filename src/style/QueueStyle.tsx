import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    icon: {
        color: 'white',
        width : 100,
        'position' : 'relative',
        'left' : '50%',
        'margin-left' : '-50px',
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
    check: {
        color: 'black',
    },
    locationfield: {
		marginBottom: '20px'
	},
}));  

export default {useStyles};