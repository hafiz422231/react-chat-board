import React, {useState,useRef,useEffect} from 'react';
import {Link} from 'react-router-dom';
import useStyles from "./style";
import ButtonComponent from '../button/button';

import InputAdornment from '@material-ui/core/InputAdornment';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import CircularProgress from '@material-ui/core/CircularProgress';

import ChatIcon from '@material-ui/icons/Chat';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CommentIcon from '@material-ui/icons/Comment';
import PhoneIcon from '@material-ui/icons/Phone';
import FaceIcon from '@material-ui/icons/Face';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


const Join = () => {

    const classes = useStyles();
    const inputRef = useRef(null);

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [number, setNumber] = useState('');
    const [image, setImage] = useState('');
    const [loading,setLoading] = useState(false);
    var imageName = '';


    useEffect(() => {
        inputRef.current.focus();
    }, [inputRef]);


    const handleImageChange = (e) => {
        e.preventDefault();
    
        setImage(e.target.files[0]);
        setLoading(true);
        imageName = e.target.files[0].name;
        
        let reader = new FileReader();
        
        reader.onloadend = () => {
            setImage(reader.result);
        }
        
        reader.readAsDataURL( e.target.files[0]);
    }

    let $preview = (<Avatar alt="Suleman" className={classes.avatar}>S</Avatar>);
    if(image){
        $preview = (<Avatar alt={`${imageName}`} src={`${image}`} className={classes.avatar}></Avatar>);
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm" className={classes.container}>
                <Typography 
                 component="div" 
                 style={{ backgroundColor: '#cfe8fc', height: '100vh', padding: '25px 15px' }}>

                    <div className={classes.containerAvatar}> 
                        <h3 className={classes.heading}>Chat Room <ChatIcon color="primary" fontSize="large" /></h3>
                        {$preview}
                    </div>
                    <form className={classes.form}>
                    
                    <TextField
                         inputRef={inputRef}
                         className={classes.textField}
                         id="outlined-required"
                         label="Your Name"
                         variant="outlined"
                         placeholder="Please Enter Your Name Here"
                         InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircleIcon color="primary" />
                                </InputAdornment>
                             )
                         }}
                         type="text"
                         value={name}
                         onChange={(e) => setName(e.target.value)}
                         required
                        />

                    <TextField
                         className={classes.textField}
                         id="outlined-required"
                         label="Your Room"
                         variant="outlined"
                         placeholder="Room Name Here"
                         InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <CommentIcon color="primary" />
                                </InputAdornment>
                             )
                         }}
                         type="text"
                         value={room}
                         onChange={(e) => setRoom(e.target.value)}
                         required
                        />

                        <TextField
                         className={classes.textField}
                         id="outlined-required"
                         label="Contact Number"
                         variant="outlined"
                         placeholder="Your Contact Number"
                         InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PhoneIcon color="primary" />
                                </InputAdornment>
                             )
                         }}
                         type="text"
                         value={number}
                         onChange={(e) => setNumber(e.target.value)}
                         required
                        />

                        <TextField
                         className={classes.textField}
                         id="outlined-required"
                         label="Your Latest Picture"
                         variant="outlined"
                         InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <FaceIcon color="primary" />
                                </InputAdornment>
                             )
                         }}
                         type="file"
                         accept="image/png, image/jpg, image/jpeg"
                         onChange={(e) => handleImageChange(e)}
                         required
                        />

                        <Link 
                         to={ `/chat?name=${name}&room=${room}&number=${number}&image=${image}&imageName=${imageName}` }
                         className={classes.linkBtn}
                         onClick={ e => 
                            (!name || !number || !room || !image) ? e.preventDefault() 
                            : null
                            }
                         >
                            <ButtonComponent
                             title={loading ? 'Almost Done' : 'Sign In'}
                             variant="contained"
                             color="default"
                             endIcon={loading ? <CircularProgress color="secondary" size={24} /> : <ExitToAppIcon />}
                             className={classes.btnSignIn}
                             size="small"
                             disabled={!image ? true : false} 
                             type="submit"
                            />
                        </Link>

                    </form>

                </Typography>
            </Container>
        </React.Fragment>
    )
}

export default Join;
