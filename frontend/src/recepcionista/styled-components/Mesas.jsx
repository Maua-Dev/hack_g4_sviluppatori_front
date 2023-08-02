import style from 'styled-components';

const MesaDiv = style.div`
    display: flex;
    align-items: center; 
    background-color: #095C2E;
    border: 3px solid #f6f6f6; 
    border-radius: 50px;
    margin-top: 1rem;
    margin-left: 2.5rem;
    padding-left: 0.5rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    font-size: 2rem;
`;

const Select = style.select`
    background-color: #f6f6f6;
    border: 1px solid #f6f6f6;
    border-radius: 50px;
    margin-left: 1rem;
    margin-right: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 1.5rem;
    font-weight: bold;
    width: 70%;
    &:hover{
        border: 3px solid #f6f6f6;
    }


    &::after{
        border: 1px solid blue;
    }
    
`;

const Option = style.option`
    
    font-size: 1.5rem;
    `; 

export {MesaDiv, Select, Option}