import { makeStyles } from '@material-ui/core/styles';
import { textAlign } from '@material-ui/system';

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
		paddingTop: "5%"
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 200,
	},
	wrapper: {
		textAlign: 'center',
		display: 'table',
		width: "60%",
		margin: "0 auto"
	},
	wrappertitle: {
		textAlign: 'center',
		display: 'table',
		width: "100%",
		margin: "0 auto",
	},
	title: {
		color: "white",
		fontWeight: "bold",
		fontSize: "3em"
	},
	body: {
		[theme.breakpoints.down(700)]: {
			display: "table-row",
		}, [theme.breakpoints.up(701)]: {
			display: "table-cell"
		},
		verticalAlign: 'top',
	},
	submit: {
		display: 'inline-block',
		marginTop: "50px"
	},
	alert: {
		zIndex: 10000,
		position: "absolute",
		width: "99%",
	},
	white: {
		color: "white",
		marginTop: "30px"
	},
	input: {
		display: 'none',
	},
	upButton: {
		width: "1000px"
	},
	courseForm: {
		width: "80%",
		marginLeft: "12%",
		marginRight: "12%",
	},
	courseRow: {
		[theme.breakpoints.down("xs")]: {
			textAlign: "center"
		},
	}
}));  

export default {useStyles};
