import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	messageme: {
    margin: theme.spacing(2),
    backgroundColor: '#7e98a1',
    'border-radius': '15px 15px 2px',
  },
  messageyou: {
    margin: theme.spacing(2),
    backgroundColor: '#7da198',
    'border-radius': '15px 15px 2px',
  }
  
}));  

export default {useStyles};