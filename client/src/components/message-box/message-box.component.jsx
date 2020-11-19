import React from 'react';
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

const MessageBox = ({ userData, messages }) => (
    <MessageBoxContainer>
        {
            messages.map((message, idx) => 
                <MessageContainer key={idx}>
                    { message.author ? <MessageAuthor isYou={message.author === 'You'}>{message.author}: </MessageAuthor> : null }
                    <MessageText>{message.text}</MessageText>
                </MessageContainer>
            )
        }
    </MessageBoxContainer>
);


const mapStateToProps = createStructuredSelector({
    userData: selectUserData,
    messages: selectMessages
});

export default connect(mapStateToProps)(MessageBox);