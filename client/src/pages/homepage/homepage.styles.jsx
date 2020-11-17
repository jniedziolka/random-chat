import styled from 'styled-components';
import colors from '../../assets/styles/colors';

export const HomepageContainer = styled.div`
    height: 100vh;
    background: linear-gradient(180deg, ${colors.primary} 65%, white 40%);
`;

export const Select = styled.select`
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translateX(-50%);
    font-size: 1.5rem;
    border: 1px solid black;
    margin-bottom: 1rem;
`;

export const Option = styled.option`
    font-size: 1.5rem;
`;

export const Button = styled.button`
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translateX(-50%);
    outline: none;
    border: none;
    border-radius: .1rem;
    cursor: pointer;
    background-color: ${colors.secondary};
    color: white;
    font-size: 2rem;
    padding: .5rem;
`;