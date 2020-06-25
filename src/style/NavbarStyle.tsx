import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
	  flexGrow: 1,
	},
	appTable: {
		background: 'transparent',
		boxShadow:'none',
		color: "#ffffff",
		display: "table",
		paddingLeft: "15px",
		paddingRight: "15px",
		width: "100%"
	},
	appRow: {
		display: "table-row",
	},
	title: {
		fontSize: 45,
		fontWeight: 'bold',
		height: "80px"
	},
	left: {
		display: "inline-block",
		marginLeft: theme.spacing(2), 
	},
	right: {
		display: "inline-block",
		marginRight: theme.spacing(2), 
	},
	logocell: {
		display: "table-cell",
		verticalAlign: "middle",
		textAlign: "right",
		width: "15px"
	},
	titlecell: {
		display: "table-cell",
		width: "150px",
		verticalAlign: "middle"
	},
	leftlinks: {
		fontSize: 18,
		display: "table-cell",
		verticalAlign: "middle"
	},
	rightlinks: {
		fontSize: 18,
		display: "table-cell",
		textAlign: "right",
		verticalAlign: "middle"
	},
	link: {
		cursor: "pointer"
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
		marginBottom: '15px'
	}
}));  

export default {useStyles};
