import React from 'react';

import Title from '../../components/title/title.component';
import EnterBox from '../../components/enter-box/enter-box.component';
import AuthorCredits from '../../components/credits/credits.component';

import {
    HomepageContainer,
    TitleContainer,
    BoxTitle,
    BoxSubtitle
} from './homepage.styles';

const HomePage = () => (
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

export default HomePage;