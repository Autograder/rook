import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	form: {
        '& > *': {
			margin: theme.spacing(1),
			position: 'relative',
			textAlign: 'center',
			verticalAlign: 'middle'
		},
    // Border of Input Boxes when not clicked
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'white',
            },
		},
		display: 'inline-block'
	},
	message: {
        '& > *': {
			margin: theme.spacing(1),
			position: 'relative',
			textAlign: 'center',
			verticalAlign: 'middle',
		},
    // Border of Input Boxes when not clicked
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'white',
            },
		},
		display: 'inline-block',
		width: "100%"
	},
	wrapper: {
		textAlign: 'center',

	},
	title: {
		color: "white",
		fontWeight: "bold",
		fontSize: "3em"
	},
	body: {
		display: 'inline-block',
		width: '30%',
		verticalAlign: 'top'
	}
}));  

export default {useStyles};
