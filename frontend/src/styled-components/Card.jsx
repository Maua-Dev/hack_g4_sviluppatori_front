import style from 'styled-components';

const CardD = style.div`
    background-color: white;
    color: #3C973F;
    text-decoration: none;
    border-radius: 5px;
    border: 1px solid #3C973F;
    display: inline-block;
    width: 300px;
    margin: 20px;
    padding: 20px;
    &:hover {
        background-color: #2A6822;
        transform: scale(1.05);
        transition: background-color 0.3s ease, transform 0.3s ease;
    }
    `;

const CardTitleD = style.div`
    color: #3C973F;
    font-size: 24px;
    margin-top: 0;
    &:hover {
        color: #FFFFFF;
        text-decoration: none;
    }
    `;

const CardBodyD = style.div`
    color: white;
    &:hover {
        color: #FFFFFF;
        text-decoration: none;
    }
    `;

export { CardD, CardTitleD, CardBodyD };
