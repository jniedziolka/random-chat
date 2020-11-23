import styled from 'styled-components';
import { colors } from '../../assets/styles/colors';

export const HomepageContainer = styled.div`
    min-height: 100vh;
    background-color: ${colors.lightestGray};
`;

export const TitleContainer = styled.div`
    padding-top: 5rem;
    margin-bottom: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const BoxTitle = styled.h2`
    color: ${colors.darkGray};
    text-align: center;
    font-size: 1.25rem;
`;

export const BoxSubtitle = styled.h3`
    color: ${colors.lightGray};
    text-align: center;
    font-size: .9rem;
`;