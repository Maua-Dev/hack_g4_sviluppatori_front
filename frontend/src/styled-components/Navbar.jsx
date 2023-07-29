import style from 'styled-components';

const NavbarD = style.nav`
    background-color: #3C973F;
    padding: 10px;
    text-align: center;
    `;

const NavbarBrandD = style.p`
    color: white;
    font-weight: bold;
    font-size: 32px;
    text-decoration: none;
    &:hover {
        color: #FFFFFF;
        text-decoration: none;
    }
    `;

export { NavbarD, NavbarBrandD };