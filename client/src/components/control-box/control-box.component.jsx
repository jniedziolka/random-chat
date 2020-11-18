import React from 'react';

import {
    Box,
    Button,
    MessageInput
} from './control-box.styles';

const ControlBox = () => {
    return (
        <Box>
            <Button>Disconnect</Button>
            <MessageInput></MessageInput>
            <Button>Send Message</Button>
        </Box>
    );
}

export default ControlBox;