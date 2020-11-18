import styled, { css } from 'styled-components';
import { colors, rgbColors } from '../../assets/styles/colors';

const basicInputStyles = css`
    background-color: ${colors.lightestGray};
    border: 1px solid ${colors.gray};
    border-radius: .3rem;
    outline: none;
    padding: 1rem;
    font-size: 1rem;
`;

export const Box = styled.div`
    margin: 2rem auto 0 auto;
    width: 30%;
    background-color: white;
    display: flex;
    flex-direction: column;
    padding: 2rem 0 1rem 0;
`;

export const BoxGroup = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`;


export const Label = styled.label`
    font-size: .9rem;
    margin-bottom: 1rem;
`;

export const Input = styled.input`
    ${basicInputStyles}
    margin-bottom: 1rem;
`;

export const Select = styled.select`
    ${basicInputStyles}
`;

export const Option = styled.option`
    background-color: ${colors.lightestGray};

    &:hover {
        background-color: none;
    }
`;

export const Button = styled.button`
    width: 90%;
    margin: 2rem auto;
    background-color: rgba(${rgbColors.purple}, .8);
    color: white;
    outline: none;
    border: none;
    font-size: 1rem;
    border-radius: .3rem;
    padding: 1rem;
    transition: all .2s;

    &:hover {
        cursor: pointer;
        background-color: rgba(${rgbColors.purple}, 1);
    }
`;