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
		display: 'inline-block',
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 200,
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
	wrapper2: {
		display: 'inline-block',
		marginTop: '20px',
		width: "70%"
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
	},
	submit: {
		display: 'inline-block',
		marginTop: "50px"
	}
}));  

export default {useStyles};
