import { makeStyles } from '@material-ui/core/styles';
import OurTheme from './Theme';

const theme1 = OurTheme.theme;
const useStyles = makeStyles((theme) => ({
    title : {
        color: 'white',
        fontSize : 60,
        paddingLeft: 100,
    },
    h2 : {
        color: 'white',
        paddingLeft: 100,
    },
    h3 : {
        paddingLeft: 130,
        color: 'white',
        fontSize: 20,
        height: 1,
    },
    courseinfo: {
        color: 'white',
        fontSize: 20,
    },
    switch: {
        marginTop: -15,
    },
    col : {
        color: 'black',
        fontWeight: 'bold',
    },
    cell : {
        color: 'black',
    },
    iTable : {
        minWidth: 600,
        maxHeight: 290,
    },
    gTable : {
        minWidth: 600,
        maxHeight: 400,
    },
    rightCol : {
        topPadding: 500,
    },
    paper: {
        padding: theme.spacing(0),
        paddingLeft: 125,
        color: theme1.palette.text.primary,
        background: '#2A667B',
        fontSize: 20,
        fontWeight: 'bold',
      },
      paper2: {
        padding: theme.spacing(0),
        color: theme1.palette.text.primary,
        background: '#2A667B',
        fontSize: 20,
      },
      switchLabel: {
            paddingLeft: 115,
            fontSize: 20,
          color: 'white',
          fontWeight: 'bold',
      },
      tablelabel: {
        fontSize: 20,
        color: 'white',
      },
      tableheader: {
          background: 'black',
      }

}));

export default { useStyles };