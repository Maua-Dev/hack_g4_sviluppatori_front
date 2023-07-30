import style from 'styled-components';

const Imagem = style.img`
    width: 100%;
    height: 90%;
    border-radius: 5px;
    border: 1px solid #7D3133;
    display: flex;
    justify-content: center;
    margin-top: 2.5rem;
    margin-left: 2.5rem;
    &:hover{
        border: 3px solid #7D3133;
    }
`;	

export {Imagem}