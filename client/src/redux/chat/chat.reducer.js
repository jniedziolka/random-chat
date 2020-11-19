import ChatActionTypes from './chat.types';

const INITIAL_STATE = {
    messages: [{
        author: null,
        text: 'Looking for a pair...'
    }],
    currentRoom: '',
    isConnecting: true
}

const chatReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ChatActionTypes.FIND_PAIR_START:
            return {
                ...state,
                messages: [{ author: null, text: 'Looking for a pair...' }],
                isConnecting: true
            }
        case ChatActionTypes.FIND_PAIR_SUCCESS:
            return {
                ...state,
                currentRoom: action.payload,
                messages: [{
                    author: null,
                    text: 'Connected with stranger!'
                }],
                isConnecting: false
            }
        case ChatActionTypes.PAIR_DISCONNECTED:
            return {
                ...state,
                currentRoom: '',
                messages: [...state.messages, { author: null, text: action.payload }],
            }
        case ChatActionTypes.APPEND_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, { author: action.payload.author, text: action.payload.text }]
            }
        case ChatActionTypes.LEAVE_ROOM:
            return {
                ...state,
                currentRoom: ''
            }
        default:
            return state;
    }
};

export default chatReducer;