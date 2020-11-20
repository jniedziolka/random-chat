import socketIOClient from 'socket.io-client';
import ChatActionTypes from '../chat/chat.types';

const socketMiddleware = (url) => {
    return storeAPI => {
        const socket = socketIOClient(url);

        socket.on('findPairSuccess', (roomName) => {
            storeAPI.dispatch({
                type: ChatActionTypes.FIND_PAIR_SUCCESS,
                payload: roomName
            });
        });

        socket.on('message', ({ author, text }) => {
            storeAPI.dispatch({
                type: ChatActionTypes.APPEND_MESSAGE,
                payload: { author, text }
            });
        });

        socket.on('userLeft', text => {
            storeAPI.dispatch({
                type: ChatActionTypes.PAIR_DISCONNECTED,
                payload: text
            });
        })

        return next => action => {
            if(action.type === ChatActionTypes.FIND_PAIR_START) {
                socket.emit('findPairStart', { name: storeAPI.getState().user.userData.nickname, country: storeAPI.getState().user.userData.country });
            } else if(action.type === ChatActionTypes.SEND_MESSAGE) {
                socket.emit('message', { author: action.payload.author, text: action.payload.text });
            } else if(action.type === ChatActionTypes.LEAVE_ROOM) {
                socket.emit('leaveRoom');
            }
            return next(action);
        }
    }
}

export default socketMiddleware;
