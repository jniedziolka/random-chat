import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Title from '../../components/title/title.component';
import EnterBox from '../../components/enter-box/enter-box.component';
import AuthorCredits from '../../components/credits/credits.component';

import { leaveRoom } from '../../redux/chat/chat.actions';

import {
    HomepageContainer,
    TitleContainer,
    BoxTitle,
    BoxSubtitle
} from './homepage.styles';

const HomePage = ({ leaveRoom }) => {
    useEffect(() => {
        leaveRoom();
    }, [leaveRoom]);

    return (
        <HomepageContainer>
            <TitleContainer>
                <Title />
            </TitleContainer>
            <BoxTitle>Just Try</BoxTitle>
            <BoxSubtitle>It's never too late to find a new friend.</BoxSubtitle>
            <EnterBox />
            <AuthorCredits />
        </HomepageContainer>
    );
}

const mapDispatchToProps = dispatch => ({
    leaveRoom: () => dispatch(leaveRoom())
});

export default connect(null, mapDispatchToProps)(HomePage);