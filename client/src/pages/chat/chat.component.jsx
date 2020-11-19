import React from 'react';

import Title from '../../components/title/title.component';
import MessageBox from '../../components/message-box/message-box.component';
import ControlBox from '../../components/control-box/control-box.component';
import Credits from '../../components/credits/credits.component';

import {
    ChatContainer,
    TitleContainer,
} from './chat.styles';

const Chat = () => {
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

export default Chat;