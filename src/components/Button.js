import styled from 'styled-components';

export const ButtonContainer = styled.button`
    text-transform: captilize;
    font-size: 1.4rem;
    background-color: transparent;
    border: 0.05rem solid var(--LightGreen);
    border-color: ${props=> props.cart ? "var(--MainYellow)":"var(--lightGreen)"};
    color: ${props=> props.cart ? "var(--MainYellow)": "var(--MainWhite)"};
    border-radius: 0.5rem;
    padding: 0.2rem 0.4rem;
    margin: 0.2rem 0.5rem 0.2rem 0;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    &:hover {
        color: var(--MainGreen);
        background-color: var(--LightGreen);
    }
    &:focus {
        outline: none;
    }
`