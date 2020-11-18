import React from 'react';

import {
    MessageBoxContainer,
    MessageContainer,
    MessageAuthor,
    MessageText
} from './message-box.styles';

const MessageBox = () => {
    return (
        <MessageBoxContainer>
            <MessageContainer>
                <MessageText>Connected with stranger.</MessageText>
            </MessageContainer>
            <MessageContainer>
                <MessageAuthor isYou={true}>You: </MessageAuthor>
                <MessageText>Hej</MessageText>
            </MessageContainer>
            <MessageContainer>
                <MessageAuthor isYou={false}>Stranger: </MessageAuthor>
                <MessageText>Hej</MessageText>
            </MessageContainer>
        </MessageBoxContainer>
    );
}

export default MessageBox;