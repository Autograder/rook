import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	root: {
	  flexGrow: 1,
	},
	appBar: {
		background: "transparent",
		boxShadow:"none",
		color: "#ffffff"
	},
	appTable: {
		background: "transparent",
		boxShadow:"none",
		color: "#ffffff",
		display: "table",
		paddingLeft: "15px",
		paddingRight: "15px",
		width: "100%"
	},
	courseList: {
		marginLeft: "20px",
		paddingRight: "5px",
	},
	emptyList: {
		marginLeft: "20px",
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
		fontWeight: "bold",
		height: "80px"
	},
	homeCell: {
		display: "table-cell",
		width: "150px",
		verticalAlign: "middle"
	},
	leftnav: {
		fontSize: 18,
		display: "table-cell",
		verticalAlign: "middle",
		paddingLeft: "15px"
	},
	rightnav: {
		fontSize: 18,
		display: "table-cell",
		textAlign: "right",
		verticalAlign: "middle"
	},
	link: {
		cursor: "pointer"
	},
	list: {
		width: 300,
	},
	listItems: {
		color: "black",
		textAlign: "center",
	},
	form: {
        // Border of Input Boxes when not clicked
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "black",
            },
        },
    },
    text: {
		color: "black",
		marginBottom: "15px",
		marginRight: theme.spacing(2),
	},
	class: {
		paddingRight: 30,
		paddingLeft: 30,
	},
	navButtons : {
		padding: 10,
	},
	select :{
		minWidth: 75,
		background: 'white',
		fontWeight:200,
		borderStyle:'none',
		borderWidth: 2,
		borderRadius: 12,
		paddingLeft: 24,
		paddingTop: 14,
		paddingBottom: 15,
		boxShadow: '0px 5px 8px -3px rgba(0,0,0,0.14)',
		"&:focus":{
			borderRadius: 12,
			background: 'white',
		},
	}
}));  

export default {useStyles};
