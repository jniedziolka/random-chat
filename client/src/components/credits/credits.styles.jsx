import styled from 'styled-components';
import { colors } from '../../assets/styles/colors';
import { breakpoints } from '../../assets/styles/breakpoints';

export const AuthorCredits = styled.p`
    margin-top: 2.5rem;
    text-align: center;
    font-size: 1rem;

    & > a {
        text-decoration: none;
        color: ${colors.purple};
        font-weight: 700;
    }

    @media only screen and (max-width: ${breakpoints.medium}) {
        font-size: .75rem;
    }
`;