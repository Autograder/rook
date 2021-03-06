import { makeStyles } from '@material-ui/core/styles';
import OurTheme from './Theme';

const theme1 = OurTheme.theme;
const useStyles = makeStyles((theme) =>({
    title: {
        color: 'white',
        fontSize : 60,
      },
    root: {
        flexGrow: 1,
        backgroundColor: "#2A667B",
        paddingLeft: 100,
        paddingRight: 100
    },
    tab: {
        // width: "10px",
        color: "white"
    },
    header : {
        color: 'white',
    },
    info: {
        color: 'white',
    },
    div: {
        float: 'left',
    },
    div2: {
        paddingLeft: "50px",
        float: 'left',
    },
    paper: {
        color: theme1.palette.text.primary,
        background: '#2A667B',
        fontSize: 20,
        fontWeight: 'bold',
    },
    paper2: {
        color: theme1.palette.text.primary,
        background: '#2A667B',
        fontSize: 20,
    },
    switchLabel: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
  },
}))

export default {useStyles};