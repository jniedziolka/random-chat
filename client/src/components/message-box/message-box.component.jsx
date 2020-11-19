import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectUserData } from '../../redux/user/user.selectors';

import {
    MessageBoxContainer,
    MessageContainer,
    MessageAuthor,
    MessageText
} from './message-box.styles';

const MessageBox = ({ userData }) => (
    <MessageBoxContainer>
        <MessageContainer>
            <MessageText>Connected with stranger. You are {userData.nickname} from {userData.country}.</MessageText>
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


const mapStateToProps = createStructuredSelector({
    userData: selectUserData
});

export default connect(mapStateToProps)(MessageBox);