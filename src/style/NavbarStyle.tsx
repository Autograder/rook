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
	title: {
	  	flexGrow: 1,
	  	fontSize: 40,
	  	fontWeight: 'bold'
	},
	pages: {
		fontSize: 18,
		marginRight: theme.spacing(2),
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
