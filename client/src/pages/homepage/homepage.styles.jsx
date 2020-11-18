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

export const HomepageContainer = styled.div`
    height: 100vh;
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

export const Box = styled.div`
    margin: 2rem auto 0 auto;
    width: 30%;
    background-color: white;
    display: flex;
    flex-direction: column;
    padding: 2rem 0 1rem 0;
`;

export const FormGroup = styled.div`
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