import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { appendMessage, sendMessage, findPairStart, leaveRoom } from '../../redux/chat/chat.actions';

import { selectUserData } from '../../redux/user/user.selectors';
import { selectCurrentRoom, setlectIsConnecting } from '../../redux/chat/chat.selectors';

import {
    Box,
    Button,
    MessageInput
} from './control-box.styles';

const ControlBox = ({ userData, appendMessage, sendMessage, currentRoom, findPairStart, leaveRoom, isConnecting }) => {
    const [messageText, setMessageText] = useState('');
    const inputRef = useRef(null);

    const handleChange = (e) => {
        setMessageText(e.target.value);
    };

    const handleToggleButton = (e) => {
        if(currentRoom) {
            leaveRoom();
        } else {
            findPairStart();
        }
    }

    const handleSend = (e) => {
        appendMessage({ author: 'You', text: messageText });
        sendMessage({ author: userData.nickname, text: messageText });
        setMessageText('');
        inputRef.current.focus();
    };

    return (
        <Box>
            <Button onClick={handleToggleButton} disabled={isConnecting}>{currentRoom ? 'Disconnect' : 'New Pair'}</Button>
            <MessageInput ref={inputRef} onChange={handleChange} value={messageText} autoFocus={true} disabled={!currentRoom}></MessageInput>
            <Button onClick={handleSend} disabled={!currentRoom}>Send Message</Button>
        </Box>
    );
}

const mapStateToProps = createStructuredSelector({
    userData: selectUserData,
    currentRoom: selectCurrentRoom,
    isConnecting: setlectIsConnecting
});

const mapDispatchToProps = dispatch => ({
    appendMessage: ({ author, text }) => dispatch(appendMessage({ author, text })),
    sendMessage: ({ author, text }) => dispatch(sendMessage({ author, text })),
    findPairStart: () => dispatch(findPairStart()),
    leaveRoom: () => dispatch(leaveRoom())
});

export default connect(mapStateToProps, mapDispatchToProps)(ControlBox);