import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    container: {
        padding: '0px'
    },
    form: {
        '& > *': {
            margin: theme.spacing(1),
            width: '100%',
        },
    },
    containerAvatar: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    heading: {
        textAlign: 'center',
        fontFamily: 'serif',
        fontSize: '25px',
    },
    avatar: {
        width: '80px !important',
        height: '80px !important',
        marginTop: '12px'
    },
    textField: {
        margin: '20px 0px !important',
        width: '100%'
    },
    btnSignIn: {
        paddingTop: '8px !important',
        paddingBottom: '8px !important',
        marginTop: '20px !important',
        width: '100%',
        marginLeft: '0px',
    },
    linkBtn: {
        display: 'block',
        textDecoration: 'none',
        margin: '0px'
    }
}));