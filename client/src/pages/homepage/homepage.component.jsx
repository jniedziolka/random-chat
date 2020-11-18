import React from 'react';
import { useHistory } from 'react-router-dom';

import Title from '../../components/title/title.component';
import AuthorCredits from '../../components/credits/credits.component';

import {
    HomepageContainer,
    TitleContainer,
    BoxTitle,
    BoxSubtitle,
    Box,
    FormGroup,
    Label,
    Input,
    Select,
    Option,
    Button
} from './homepage.styles';

const HomePage = () => {
    const history = useHistory();

    return (
        <HomepageContainer>
            <TitleContainer>
                <Title />
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
                <Button onClick={() => history.push('/chat')}>Start Talking</Button>
            </Box>
            <AuthorCredits />
        </HomepageContainer>
    );
}

export default HomePage;