import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>({
	profileIcon : {
		fontSize: "3rem",
	},
	topRow: {
		display: "flex",
		color: "white",
		alignItems: "center"
	},
	h2: {
		color: "white"
	},
	input: {
		color: 'white'
	},
	formControl: {
		marginRight: "1rem"
	},
	form: {
		'& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'white',
			},
		},
		'& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline' : {
			// borderColor: 'grey',
		},
		'& .MuiInputBase-root.Mui-disabled' : {
			// color: "grey"
		},
	},
	submit: {
		marginTop: "1rem"
	}
}))
export default {useStyles};