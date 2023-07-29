import style from 'styled-components';

const BotoesDiv = style.div`
padding-top: 50%;
`;

const BotaoA = style.a`
    text-decoration: none;
`;

const Botao = style.button`
    width: 200px;
    display: block;
    margin-top: 20px;
    color: black;
    border: 0px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: 5px;
    @media (min-width: 992px){
        font-size: 24px;
    }
    @media (max-width: 992px){
        font-size: 16px;
    }
    &:hover{
        font-size: 28px;
    }
    &:disabled{
        background-color: #E2EFE2;
        color: gray;
        cursor: not-allowed;
    }
`;

export {BotoesDiv, Botao, BotaoA};