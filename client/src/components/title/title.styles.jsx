import styled from 'styled-components';
import { colors } from '../../assets/styles/colors';
import { Link } from 'react-router-dom';

export const LogoContainer = styled.div`
    width: 2rem;
    height: 2rem;
`;

export const TitleText = styled.h1`
    color: ${colors.darkGray};
    margin-left: 1rem;
    font-size: 1.5rem;
`;

export const TitleLink = styled(Link)`
    text-decoration: none;
`;