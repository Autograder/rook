import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
resolved: {
    margin: theme.spacing(2),
    backgroundColor: 'blue',
    'border-radius': '15px 15px 2px',
  },
returned: {
    margin: theme.spacing(2),
    backgroundColor: 'gray',
    'border-radius': '15px 15px 2px',
},
accepted: {
    margin: theme.spacing(2),
    backgroundColor: 'green',
    'border-radius': '15px 15px 2px',
},
edited: {
    margin: theme.spacing(2),
    backgroundColor: 'red',
    'border-radius': '15px 15px 2px',
},
  
}));  

export default {useStyles};