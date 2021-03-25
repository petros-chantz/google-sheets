import styled from "styled-components";

export const FormWrapper = styled.div`
height: 70%;
width: 100%;
background-color: #cad2c5;
border-radius: 4px;
box-shadow: rgb(47 62 70 / 50%) 0px 10px 30px -5px;
display:grid;
grid-template-rows: 60px 1fr;
place-items: center;
`;

export const InputWrapper = styled.div`
    height: 100%;
    display: grid;
    grid-template-rows: repeat(5, 1fr);
    place-items: center;
    background-color: yellow;
`;

export const TextInputWrapper = styled.div`
    background-color: pink;
`;

export const FormTitle = styled.h1`
color: #2F3E46;
`;
