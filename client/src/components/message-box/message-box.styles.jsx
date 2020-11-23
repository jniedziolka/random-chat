import styled from 'styled-components';
import { colors } from '../../assets/styles/colors';
import { breakpoints } from '../../assets/styles/breakpoints';

export const MessageBoxContainer = styled.div`
    background-color: white;
    height: 70%;
    width: 80%;
    border-radius: .3rem;
    border: 1px solid ${colors.gray};
    overflow-y: auto;

    @media only screen and (max-width: ${breakpoints.large}) {
        width: 95%;
    }
`;

export const MessageContainer = styled.div`
    display: flex;
    margin: 1rem;
    font-size: 1rem;

    @media only screen and (max-width: ${breakpoints.large}) {
        font-size: .75rem;
    }
`;

export const MessageAuthor = styled.span`
    margin-right: .5rem;
    font-weight: 700;
    color: ${props => props.isYou ? colors.purple : colors.red};
`;

export const MessageText = styled.span`
    word-wrap: break-word;
    max-width: 95%;
`;