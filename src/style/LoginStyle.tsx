import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root : {
        position : 'absolute',
        width : '100%',
        left: 0,
        right: 0,
    },
    main: {
        position : 'absolute',
        width: '100%',
        left : 0,
        right: 0,
        zIndex : 1,
    },
    popup: {
        position : 'absolute',
        width : '98.5%',
        left: '50%',
        right: 0,
        marginLeft: '-49.25%',
        zIndex : 2,
    },
    title : {
        color: 'white',
        fontSize: 'calc(30px + 5vw)',
        textAlign : 'center',
    },
    button : {
        color: 'white',
        width : 100,
        left : '50%',
        marginLeft : '-50px',
        paddingTop: 10,
    },
    form: {
        '& > *': {
            position : 'relative',
            width: 'calc(210px + 6vw)',
            left : '50%',
            marginLeft : 'calc(-105px - 3vw)',
            paddingBottom : 15,
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'white',
            },
        },
    },
}));

export default { useStyles };