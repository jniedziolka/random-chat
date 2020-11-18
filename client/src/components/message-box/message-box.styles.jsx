import styled from 'styled-components';
import { colors } from '../../assets/styles/colors';

export const MessageBoxContainer = styled.div`
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