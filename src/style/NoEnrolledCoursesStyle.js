import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	text: {
      color: 'white',
      textAlign: 'center',
      fontSize: 20
    },
    bigText: {
      color: 'white',
      textAlign: 'center',
      fontSize: 35,
      marginTop: 130,
      fontWeight: 'bold'
    }
    
}));  

export default {useStyles}