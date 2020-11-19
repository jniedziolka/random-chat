import styled from 'styled-components';
import { colors, rgbColors } from '../../assets/styles/colors';

export const Box = styled.div`
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

    &:hover:enabled {
        cursor: pointer;
        background-color: rgba(${rgbColors.purple}, 1);
    }

    &:disabled {
        cursor: not-allowed;
        background-color: rgba(${rgbColors.purple}, 0.5);
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

    &:disabled {
        cursor: not-allowed;
    }
`;