import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Title from '../../components/title/title.component';
import MessageBox from '../../components/message-box/message-box.component';
import ControlBox from '../../components/control-box/control-box.component';
import Credits from '../../components/credits/credits.component';

import { findPairStart } from '../../redux/chat/chat.actions';

import {
    ChatContainer,
    TitleContainer,
} from './chat.styles';

const Chat = ({ findPairStart }) => {
    useEffect(() => {
        findPairStart();
    }, [findPairStart]);

    return (
        <ChatContainer>
            <TitleContainer>
                <Title />
            </TitleContainer>
            <MessageBox />
            <ControlBox />
            <Credits />
        </ChatContainer>
    )
};

const mapDispatchToProps = dispatch => ({
    findPairStart: () => dispatch(findPairStart())
});

export default connect(null, mapDispatchToProps)(Chat);