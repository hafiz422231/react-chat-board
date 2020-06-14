import React from 'react';
import ReactEmoji from 'react-emoji';


const Message = ({ message: { user, text, date , number },name }) => {
    
    let isSentByCurrentUser = false;

    const trimName = name.trim().toLowerCase();

    if(user === trimName){
        isSentByCurrentUser = true
    }
    
    return (
        isSentByCurrentUser
        ? (
            <div className="messageContainer" style={{ display: 'flex', justifyContent: 'flex-end', margin: '8px 0px' }}>
                <p style={{ fontSize: '10px' , color: 'purple' }}>
                    {trimName}<br />
                    {number}<br />
                    {date}
                </p>
                <div style={{ color: 'white', width: '60%', backgroundColor: 'blue', padding: '3px 3px 3px 10px', borderRadius: '7px', margin: '6px' }}>
                    <p>{ReactEmoji.emojify(text)}</p>
                </div>
            </div>
        )
        :
        (
            <div className="messageContainer" style={{ display: 'flex', justifyContent: 'flex-start', margin: '8px 0px' }}>
                <div style={{ color: 'black', width: '60%', backgroundColor: 'pink', padding: '3px 3px 3px 10px', borderRadius: '7px', margin: '6px' }}>
                    <p>{ReactEmoji.emojify(text)}</p>
                </div>
                <p style={{ fontSize: '10px' , color: 'green' }}>
                    {user}<br />
                    {number}<br />
                    {new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString()}
                </p>
            </div>
        )
    )
}

export default Message;
