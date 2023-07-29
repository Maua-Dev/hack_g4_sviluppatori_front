import style from 'styled-components';

const Text = style.p`
    color: white;
    font-size: 36px;
    font-weight: bold;
    text-align: center;
    font-family: Arial, sans-serif;
    `;


const Header = style.header`
    text-align: center;
    padding: 50px 0;
    `;

const H1 = style.h1`
    font-size: 60px;
    margin-bottom: 20px;
    font-family: Arial, sans-serif;
    `;

export { Text,Header, H1 };