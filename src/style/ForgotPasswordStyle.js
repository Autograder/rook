import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	form: {
        '& > *': {
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
		marginTop: "15px"
	},
	formControl: {
		minWidth: "100%",
	},
	wrapper: {
		textAlign: 'center',
	},
	title: {
		color: "white",
		fontWeight: "bold",
		fontSize: "3em",
		marginTop: "40px"
	},
	body: {
		color: "white",
		marginTop: "25px",
	},
	submit: {
		display: 'inline-block',
		marginTop: "40px"
	},
	alert: {
		position: "absolute",
		zIndex: 1,
		width: "99%",
	},
	page: {
		position: "absolute",
		zIndex: 0,
		width: "100%"
	},
	wrapper1: {
		marginLeft: "10%",
		marginRight: "10%"
	}
}));  

export default {useStyles};
