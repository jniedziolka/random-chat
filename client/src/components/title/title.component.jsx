import React from 'react';
import { ReactComponent as SpeechLogo } from '../../assets/icons/speech-bubble.svg';

import {
    LogoContainer,
    TitleText,
    TitleLink
} from './title.styles';

const Title = () => {
    return (
        <React.Fragment>
            <LogoContainer>
                <SpeechLogo />
            </LogoContainer>
            <TitleLink to='/'>
                <TitleText>Let's Talk!</TitleText>
            </TitleLink>
        </React.Fragment>
    );
}

export default Title;