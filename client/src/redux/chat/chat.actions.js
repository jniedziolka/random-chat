import ChatActionTypes from './chat.types';

export const findPairStart = () => ({
    type: ChatActionTypes.FIND_PAIR_START
});

export const findPairSuccess = room => ({
    type: ChatActionTypes.FIND_PAIR_SUCCESS,
    payload: room
});

export const pairDisconnected = text => ({
    type: ChatActionTypes.PAIR_DISCONNECTED,
    payload: text
})

export const appendMessage = ({ author, text }) => ({
    type: ChatActionTypes.APPEND_MESSAGE,
    payload: { author, text }
});

export const sendMessage = ({ author, text }) => ({
    type: ChatActionTypes.SEND_MESSAGE,
    payload: { author, text }
});

export const leaveRoom = () => ({
    type: ChatActionTypes.LEAVE_ROOM
})