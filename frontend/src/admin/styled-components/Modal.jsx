import style from 'styled-components';

const Input = style.input`
        display: block;
        border: 0px;
        border-radius: 10px;
        padding: 10px;
        font-size: 24px;
        background-color: white;
        color: black;
    &:hover{
        background-color: #E2EFE2;
    }
    &::placeholder{
        color: gray;
}`;

const Label = style.label`
    padding-bottom: 10px;
    font-size: 20px;
    font-weight: bold;
    color: black;
`; 



export {Input, Label}