import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectUserData } from '../../redux/user/user.selectors';
import { selectMessages } from '../../redux/chat/chat.selectors';

import {
    MessageBoxContainer,
    MessageContainer,
    MessageAuthor,
    MessageText
} from './message-box.styles';

const MessageBox = ({ userData, messages }) => {
    const messagesEndRef = useRef(null);
    const messageBoxRef = useRef(null);

    useEffect(() => {
        const messagesEnd = messagesEndRef.current;
        const messageBox = messageBoxRef.current;

        const threshold = 150;
        const position = messageBox.scrollTop + messageBox.offsetHeight;
        const height = messageBox.scrollHeight;

        if(position > height - threshold)
            messagesEnd.scrollIntoView();
    }, [messages]);

    return (
        <MessageBoxContainer ref={messageBoxRef}>
            {
                messages.map((message, idx) => 
                    <MessageContainer key={idx}>
                        { message.author ? <MessageAuthor isYou={message.author === 'You'}>{message.author}: </MessageAuthor> : null }
                        <MessageText>{message.text}</MessageText>
                    </MessageContainer>
                )
            }
            <div ref={messagesEndRef}></div>
        </MessageBoxContainer>
    );
}


const mapStateToProps = createStructuredSelector({
    userData: selectUserData,
    messages: selectMessages
});

export default connect(mapStateToProps)(MessageBox);