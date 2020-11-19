import { createSelector } from 'reselect';

const selectChat = state => state.chat;

export const selectMessages = createSelector(
    [selectChat],
    chat => chat.messages
);

export const selectCurrentRoom = createSelector(
    [selectChat],
    chat => chat.currentRoom
);

export const setlectIsConnecting = createSelector(
    [selectChat],
    chat => chat.isConnecting
)