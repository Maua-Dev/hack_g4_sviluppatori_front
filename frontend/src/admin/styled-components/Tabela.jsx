import style from 'styled-components';

const TabelaD = style.div`
    background-color: #E2EFE2;
    border-radius: 10px;
    padding: 10px;  
`;

const Tabela = style.table`
    width: 100%;
    border-collapse: collapse;
    color: black;
`;

const TabelaHead = style.thead`
    background-color: white;
    border: 1px solid black;
    border-radius: 50px;
`; 

const TabelaRow = style.tr`
    margin: 10px;
`; 

const TabelaH = style.th`
    padding: 10px;
    text-align: center;
    font-size: 24px;
    color: black;
`;

const TabelaData = style.td`
    color: black;
    padding: 10px;
    text-align: center;
    font-size: 24px;
    border-bottom: 1px solid black;
`;

const TabelaTdBotao = style.td`
    border: 0px;
    float: left;
`;
    
const TabelaBotao = style.button`
    border: 0px;
    padding-top: 10px;
    font-size: 24px;
    background-color: #E2EFE2;
`;
const Svg = style.svg`
    width: 30px;
`;


export {TabelaD, Tabela, TabelaHead, TabelaRow, TabelaH, TabelaData, TabelaTdBotao, TabelaBotao, Svg};