import style from "styled-components";

const BodyLogin = style.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
width: 100vw;
background-color: #3C973F;
margin: 0;
padding: 0;
font-family: Arial, sans-serif;
`; 

const Card = style.div`
    height: 400px;
    width: 350px;
    margin-top: auto;
    margin-bottom: auto;
    background: #095C2E;
    position: relative;
    margin: 0 auto 100px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    -moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 5px;
`;

const ContainerLogo = style.div`
    position: absolute;
    height: 170px;
    width: 170px;
    top: -75px;
    left: calc(50% - 85px);
    border-radius: 50%;
    background: #21A85E;
    padding: 10px;
    text-align: center;
    display: flex;
    justify-content: center;
    
`;

const ContainerLogin = style.div`
    padding: 0 2rem;
    margin-top: 1.5rem;
    display: flex;
    justify-content: center;
    border-radius: 5px;
`;


const ImgLogo = style.img`
    height: 150px;
    width: 150px;
    border-radius: 50%;
    border: 2px solid white;
`;

const ContainerForm = style.div`
    margin-top: 100px;
    display: flex;
    justify-content: center;
`;

const Button = style.button`
    
    width: 60%;
    background: #C7383D !important;
    color: white !important;
    border: 0px
    border-radius: 5px;
    font-weight: bold;
    &:focus{
        box-shadow: none !important;
        outline: 0px !important;
    }
    &:hover{
        background: #C7383D !important;
        opacity: 0.8;
    }
`;

const ContainerCard = style.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
`;

const InputDiv = style.div`
    display: flex;
    justify-content: center;
    text-align: center;
    margin-left: 5rem;
    margin-bottom: 1rem;
    border-radius: 5px;
`;


const InputSvg = style.div`
    margin-left: -2.5rem;
    background: #C7383D !important;
    color: white !important;
    border: 0 !important;
    border-radius: 0.25rem 0 0 0.25rem !important;
    height: 2.5rem;
    width: 2.5rem;
`;

const Input = style.input`
    display: inline-block;
    width: 83.5%;
    height: 2.5rem;
    border: 0 !important;
    border-radius: 0 0.25rem 0.25rem 0 !important;
    color: black;
    &:focus{
        box-shadow: none !important;
        outline: 0px !important;
    }
`;


export {BodyLogin, Card, ContainerLogo, ImgLogo, ContainerForm, ContainerCard, Button, ContainerLogin, InputDiv, InputSvg, Input}