import React, {useEffect, useState, useRef } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import Messages from '../Messages/messages';

import useStyles from "./style";
import Navbar from './navbar/navbar';

import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import ButtonComponent from '../button/button';


import SmsIcon from '@material-ui/icons/Sms';
import SendIcon from '@material-ui/icons/Send';


let socket;

const Chat = ({ location }, props) => {

    const classes = useStyles();
    const inputRef = useRef(null);

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [number, setNumber] = useState('');
    const [image, setImage] = useState('');
    const [imageName, setImageName] = useState('');
    const ENDPOINT = 'https://react-application-chat.herokuapp.com/';    
    
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {

        const { name , room , number , image , imageName } = queryString.parse(location.search);
        
        socket = io(ENDPOINT);

        setName(name);
        setRoom(room);
        setNumber(number);
        setImageName(imageName);
        setImage(image);

        socket.emit('join', { name, room, number }, () => {
            
        });

        return () => {
            socket.emit('disconnect');
            socket.off();
        }

    }, [ENDPOINT, location.search]);
    

    useEffect(() => {

        socket.on('message', (message) => {
            setMessages([...messages, message]);
        });

    }, [messages]);


    // Sending Message Function
    const sendMessage = (e) => {
        e.preventDefault();

        if(message){
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }

    useEffect(() => {
        inputRef.current.focus();
    }, [inputRef]);

    return (
        <div className={classes.container}>

            <Navbar name={name} room={room} number={number} image={image} imageName={imageName} />

            <Messages messages={messages} name={name} number={number} />
            
            <form>
                <TextField
                    inputRef={inputRef}
                    className={classes.sendMsg}
                    id="outlined-required"
                    label="Your Message"
                    variant="outlined"
                    placeholder="Leave Your Message"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SmsIcon color="primary" />
                            </InputAdornment>
                            ),
                        endAdornment: (
                            <InputAdornment position="end">
                                <ButtonComponent title="" endIcon={<SendIcon color="primary" />} onClick={(e) => sendMessage(e)} />
                            </InputAdornment>
                        )    
                        }}
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={e => e.key === 'Enter' ? sendMessage(e) : null}
                />
            </form>
        </div>
    )
}

export default Chat;
