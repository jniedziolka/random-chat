import styled from 'styled-components';
import { colors } from '../../assets/styles/colors';

export const AuthorCredits = styled.p`
    margin-top: 3rem;
    text-align: center;
    font-size: 1rem;

    & > a {
        text-decoration: none;
        color: ${colors.purple};
        font-weight: 700;
    }
`;