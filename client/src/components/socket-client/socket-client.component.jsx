import { useEffect } from 'react';
import socketIOClient from 'socket.io-client';

const SocketClient = () => {
    useEffect(() => {
        const socket = socketIOClient('http://127.0.0.1:3001');
    }, []);

    return null;
}

export default SocketClient;