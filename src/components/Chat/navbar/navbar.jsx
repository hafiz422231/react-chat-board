import React from 'react';

import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import {Link} from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';

const SmallAvatar = withStyles((theme) => ({
    root: {
      width: 20,
      height: 20,
      color: 'red',
    },
  }))(Avatar);


const Navbar = (props) => {

    return (
        <div style={{backgroundColor: '#2b7cff', 
        }}>
            <Link to="/" style={{margin: '0px', padding: '0px'}}>
                <KeyboardBackspaceIcon fontSize="small" />
            </Link>
            <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                color: 'white', 
                padding: '8px',
                marginTop: '-6px'
                }}
                >

                <div style={{ display: 'flex' }}>
                <Badge
                 overlap="circle"
                 anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                badgeContent={<SmallAvatar alt={props.name.charAt(0)} src={props.name.charAt(0)} />}
                >
                    <Avatar 
                        alt=""
                        style={{ width: '55px', height: '55px' }}
                        src=""
                    ></Avatar>    
                </Badge>

                    <div style={{ fontSize: '12px', fontWeight: 600, marginLeft: '15px', marginTop: '10px' }}>
                        <span>{props.name}</span><br />
                        <span>{props.number}</span><br />
                        <span style={{ color: '#00ffdd', fontSize: '10px' }}>{`active`}</span>
                    </div>
                </div>
                <div style={{ fontSize: '12px', fontFamily: 'serif', marginTop: '9px' }}>
                    <span>Room Joined: <b>{props.room}</b></span><br />
                    <span>{new Date().toLocaleDateString()}</span><br />
                    <span>{new Date().toLocaleTimeString()}</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
