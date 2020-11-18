import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { setData } from '../../redux/user/user.actions'

import {
    Box,
    BoxGroup,
    Label,
    Input,
    Select,
    Option,
    Button
} from './enter-box.styles';

const EnterBox = ({ setData }) => {
    const history = useHistory();
    const [userData, setUserData] = useState({ 'nickname': '', 'country': '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({...userData, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setData(userData);
        history.push('/chat');
    }

    return (
        <form onSubmit={handleSubmit}>
            <Box>
                <BoxGroup>
                    <Label>Nickname</Label>
                    <Input name='nickname' type="text" onChange={handleChange} />
                </BoxGroup>
                <BoxGroup>
                    <Label>Country</Label>
                    <Select name='country' onChange={handleChange}>
                        <Option value=''>----</Option>
                        <Option value='poland'>Poland</Option>
                        <Option value='belarus'>Belarus</Option>
                    </Select>
                </BoxGroup>
                <Button>Start Talking</Button>
            </Box>
        </form>
    );
}

const mapDispatchToProps = dispatch => ({
    setData: (data) => dispatch(setData(data))
});

export default connect(null, mapDispatchToProps)(EnterBox);