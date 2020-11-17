import React from 'react';
import { ReactComponent as SpeechLogo } from '../../assets/icons/speech-bubble.svg';

import {
    HomepageContainer,
    TitleContainer,
    LogoContainer,
    Title,
    BoxTitle,
    BoxSubtitle,
    Box,
    FormGroup,
    Label,
    Input,
    Select,
    Option,
    Button,
    Credits
} from './homepage.styles';

const HomePage = () => {
    return (
        <HomepageContainer>
            <TitleContainer>
                <LogoContainer>
                    <SpeechLogo />
                </LogoContainer>
                <Title>Let's Talk!</Title>
            </TitleContainer>
            <BoxTitle>Just Try</BoxTitle>
            <BoxSubtitle>It's never too late to find a new friend.</BoxSubtitle>
            <Box>
                <FormGroup>
                    <Label>Nickname</Label>
                    <Input type="text" />
                </FormGroup>
                <FormGroup>
                    <Label>Country</Label>
                    <Select>
                        <Option value="Poland">Poland</Option>
                        <Option value="Belarus">Belarus</Option>
                    </Select>
                </FormGroup>
                <Button>Start Talking</Button>
            </Box>
            <Credits>Want to know the author? Just visit his <a href="https://jniedziolka.github.io" target="_blank" rel="noopener noreferrer">site!</a></Credits>
        </HomepageContainer>
    );
}

export default HomePage;