import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
	  flexGrow: 1,
	},
	appBar: {
		background: 'transparent',
		boxShadow:'none',
		color: "#ffffff"
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
	pages: {
		fontSize: 18,
		marginRight: theme.spacing(2),
	},
	appRow: {
		display: "table-row",
	},
	home: {
		fontSize: 45,
		fontWeight: 'bold',
		height: "80px"
	},
	exitCell: {
		display: "table-cell",
		verticalAlign: "middle",
		textAlign: "right",
		width: "15px"
	},
	homeCell: {
		display: "table-cell",
		width: "150px",
		verticalAlign: "middle"
	},
	leftlinks: {
		fontSize: 18,
		display: "table-cell",
		verticalAlign: "middle",
		paddingLeft: "15px"
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
		marginBottom: '15px',
		marginRight: theme.spacing(2),
	},
	class: {
		paddingRight: 30,
		paddingLeft: 30,
	},
	navButtons : {
		marginRight: 30
	}
}));  

export default {useStyles};
