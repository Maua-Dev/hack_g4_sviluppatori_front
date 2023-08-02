import style from 'styled-components';

const BotoesDiv = style.div`
    background-color: #7D3133;
    border: 1px solid #7D3133;
    border-radius: 5px;
    margin-top: 120%;
    padding-left: 0 
    padding-bottom: 32px;
    `;

const Botao = style.button`
    margin-left: 0px;
    color: color;
    background-color: #C7383C;
    border-top: 3px solid #f6f6f6;
    border-bottom: 3px solid #f6f6f6;
    border-right: 3px solid #f6f6f6;
    border-left: 0px;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    display: flex;
    justify-content: center;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    width: 180px;
    &:hover{
        width: 210px;
    }
    &:disabled{
        cursor: not-allowed;
    }
    `;

const Redirecionar = style.a`
    color: white;
    text-decoration: none;
    font-size: 1.5rem;
    width: 180px;
`; 


export {BotoesDiv, Botao, Redirecionar}