import styled from 'styled-components';
import { breakpoints } from '../../assets/styles/breakpoints';
import { colors, rgbColors } from '../../assets/styles/colors';

export const Box = styled.div`
    background-color: ${colors.gray};
    width: 80%;
    height: 3rem;
    display: flex;
    justify-content: center;
    border-radius: .3rem;

    @media only screen and (max-width: ${breakpoints.large}) {
        width: 95%;
    }
`;

export const Button = styled.button`
    width: 10%;
    height: 3rem;
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

    @media only screen and (max-width: ${breakpoints.largest}) {
        width: 15%;
    }

    @media only screen and (max-width: ${breakpoints.large}) {
        font-size: .75rem;
    }

    @media only screen and (max-width: ${breakpoints.medium}) {
        width: 35%;
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

    @media only screen and (max-width: ${breakpoints.large}) {
        font-size: .75rem;
    }
`;