import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    icon: {
        color: 'white',
        width : 100,
        'position' : 'relative',
        'left' : '50%',
        'margin-left' : '-50px',
        'cursor': 'pointer'
    },
}));  

export default {useStyles};