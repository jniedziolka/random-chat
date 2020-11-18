import React from 'react';

import Title from '../../components/title/title.component';
import Credits from '../../components/credits/credits.component';

import {
    ChatContainer,
    TitleContainer,
    MessageBox,
    ControlBox,
    Button,
    MessageInput,
    MessageContainer,
    MessageAuthor,
    MessageText
} from './chat.styles';

const Chat = () => {
    return (
        <ChatContainer>
            <TitleContainer>
                <Title />
            </TitleContainer>
            <MessageBox>
                <MessageContainer>
                    <MessageText>Połączono z obcym.</MessageText>
                </MessageContainer>
                <MessageContainer>
                    <MessageAuthor isYou={true}>Ty: </MessageAuthor>
                    <MessageText>Hej</MessageText>
                </MessageContainer>
                <MessageContainer>
                    <MessageAuthor isYou={false}>Obcy: </MessageAuthor>
                    <MessageText>Hej</MessageText>
                </MessageContainer>
            </MessageBox>
            <ControlBox>
                <Button>Rozłącz się</Button>
                <MessageInput></MessageInput>
                <Button>Wyślij wiadomość</Button>
            </ControlBox>
            <Credits />
        </ChatContainer>
    );
}

export default Chat;