import styled from 'styled-components';
import { colors, rgbColors } from '../../assets/styles/colors';

export const ChatContainer = styled.div`
    height: 100vh;
    background-color: ${colors.lightestGray};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1.5rem;
`;

export const MessageBox = styled.div`
    background-color: white;
    height: 70%;
    width: 80%;
    border-radius: .3rem;
    border: 1px solid ${colors.gray};
`;

export const MessageContainer = styled.div`
    margin: 1rem;
    font-size: 1rem;
`;

export const MessageAuthor = styled.span`
    font-weight: 700;
    color: ${props => props.isYou ? colors.purple : colors.red};
`;

export const MessageText = styled.span`
`;

export const ControlBox = styled.div`
    background-color: ${colors.gray};
    width: 80%;
    height: 7.5%;
    display: flex;
    justify-content: center;
    border-radius: .3rem;
`;

export const Button = styled.button`
    width: 10%;
    outline: none;
    border: none;
    border-radius: .3rem;
    background-color: rgba(${rgbColors.purple}, 0.8);
    transition: all .2s;
    color: white;
    font-size: 1rem;

    &:hover {
        cursor: pointer;
        background-color: rgba(${rgbColors.purple}, 1);
    }
`;

export const MessageInput = styled.textarea`
    width: 80%;
    resize: none;
    outline: none;
    border: 1px solid ${colors.gray};
    border-radius: .3rem;
    background-color: ${colors.lightestGray};
    font-size: 1rem;
    color: ${colors.darkGray};
    padding: .5rem;
`;