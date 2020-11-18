import React from 'react';
import { useHistory } from 'react-router-dom';

import {
    Box,
    BoxGroup,
    Label,
    Input,
    Select,
    Option,
    Button
} from './enter-box.styles';

const EnterBox = () => {
    const history = useHistory();

    return (
        <Box>
            <BoxGroup>
                <Label>Nickname</Label>
                <Input type="text" />
            </BoxGroup>
            <BoxGroup>
                <Label>Country</Label>
                <Select>
                    <Option value="Poland">Poland</Option>
                    <Option value="Belarus">Belarus</Option>
                </Select>
            </BoxGroup>
            <Button onClick={() => history.push('/chat')}>Start Talking</Button>
        </Box>
    );
}

export default EnterBox;