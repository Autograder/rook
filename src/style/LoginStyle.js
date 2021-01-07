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
    underline: {
        '&:hover': {
            textDecoration : 'none',
            underline: '1px solid',
        },
    },
    button: {
        color: 'white',
        width : 100,
        left : '50%',
        marginLeft : '-50px',
        marginTop: "30px",
    },
    email: {
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
    password: {
        '& > *': {
            position : 'relative',
            width: 'calc(210px + 6vw)',
            left : '50%',
            marginLeft : 'calc(-105px - 3vw)',
            paddingBottom : 10,
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'white',
            },
        },
    },
    links: {
        textAlign: "center",
    },
    bottomRightIcon: {
        position: "absolute",
        bottom: 10,
        right: 10,
        zIndex: 1
    }
}));

export default {useStyles};