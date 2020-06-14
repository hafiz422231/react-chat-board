import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from '../Message/message';

const Messages = ({messages, name, number}) => {
    return (
        <ScrollToBottom>
            {
                messages.map((message, index) => 
                    <div key={index}>
                        <Message message={message} name={name} numberUser={number} />
                </div>)
            }
        </ScrollToBottom>
    )
}

export default Messages;
