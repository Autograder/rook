import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    form: {
        '& > *': {
            width: 300,
            'position' : 'relative',
            'left' : '50%',
            'margin-left' : '-150px',
            'padding-bottom' : '10px',
        },
    // Border of Input Boxes when not clicked
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'white',
            },
        },
    },
    title : {
        color: 'white',
        'font-size': '100px',
        'text-align' : 'center',
    },
    button : {
        color: 'white',
        'text-align' : 'center',
        width : 100,
        'position' : 'relative',
        'left' : '50%',
        'margin-left' : '-50px',
    },
    wrapper : {
        'padding-bottom' : '10px',
    },
}));

export default { useStyles };