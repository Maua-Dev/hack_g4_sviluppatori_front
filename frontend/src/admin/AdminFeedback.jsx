import {Body} from "../styled-components/Body";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import {NavbarD, NavbarBrandD} from "../styled-components/Navbar";
import {BotoesDiv, Botao, BotaoA} from "../admin/styled-components/Botoes";
import {TabelaD, Tabela, TabelaRow, TabelaHead, TabelaData, TabelaH, Svg} from "../admin/styled-components/Tabela";
import React from 'react'
import axios from "axios";

function AdminFeedback(){
    const [feedback, setFeedback] = React.useState([]);

    React.useEffect(()=>{
        const resposta =  axios.get("http://localhost:3001/feedback");
        resposta.then((dados) => {
            setFeedback(dados.data);
    })});
    return(
        <Body>
            <Navbar>
                    <NavbarD>
                    <Navbar.Brand href="/">
                        <NavbarBrandD>
                        Sviluppatori  
                        </NavbarBrandD>
                    </Navbar.Brand>
                    </NavbarD>
                </Navbar>
            <Container fluid>
                <Row>
                    <Col md={3} style={{padding: 0}}>
                        <BotoesDiv>
                            <BotaoA href="/admin/ingredientes">
                            <Botao>
                                <Svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="me-2 bi bi-file-spreadsheet-fill" viewBox="0 0 16 16">
                                    <path d="M12 0H4a2 2 0 0 0-2 2v4h12V2a2 2 0 0 0-2-2zm2 7h-4v2h4V7zm0 3h-4v2h4v-2zm0 3h-4v3h2a2 2 0 0 0 2-2v-1zm-5 3v-3H6v3h3zm-4 0v-3H2v1a2 2 0 0 0 2 2h1zm-3-4h3v-2H2v2zm0-3h3V7H2v2zm4 0V7h3v2H6zm0 1h3v2H6v-2z"/>
                                </Svg>                 
                                Estoque
                            </Botao>
                            </BotaoA>
                            <BotaoA href="/admin/financeiro">
                                <Botao>
                                    <Svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="me-2 bi bi-currency-exchange" viewBox="0 0 16 16">
                                        <path d="M0 5a5.002 5.002 0 0 0 4.027 4.905 6.46 6.46 0 0 1 .544-2.073C3.695 7.536 3.132 6.864 3 5.91h-.5v-.426h.466V5.05c0-.046 0-.093.004-.135H2.5v-.427h.511C3.236 3.24 4.213 2.5 5.681 2.5c.316 0 .59.031.819.085v.733a3.46 3.46 0 0 0-.815-.082c-.919 0-1.538.466-1.734 1.252h1.917v.427h-1.98c-.003.046-.003.097-.003.147v.422h1.983v.427H3.93c.118.602.468 1.03 1.005 1.229a6.5 6.5 0 0 1 4.97-3.113A5.002 5.002 0 0 0 0 5zm16 5.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0zm-7.75 1.322c.069.835.746 1.485 1.964 1.562V14h.54v-.62c1.259-.086 1.996-.74 1.996-1.69 0-.865-.563-1.31-1.57-1.54l-.426-.1V8.374c.54.06.884.347.966.745h.948c-.07-.804-.779-1.433-1.914-1.502V7h-.54v.629c-1.076.103-1.808.732-1.808 1.622 0 .787.544 1.288 1.45 1.493l.358.085v1.78c-.554-.08-.92-.376-1.003-.787H8.25zm1.96-1.895c-.532-.12-.82-.364-.82-.732 0-.41.311-.719.824-.809v1.54h-.005zm.622 1.044c.645.145.943.38.943.796 0 .474-.37.8-1.02.86v-1.674l.077.018z"/>
                                    </Svg>
                                    Financeiro
                                </Botao>
                            </BotaoA>
                                <Botao disabled="disabled" style={{backgroundColor: "#72F478"}}>
                                    <Svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="me-2 bi bi-hand-thumbs-up" viewBox="0 0 16 16">
                                        <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"/>
                                    </Svg>
                                    Feedback
                                </Botao>
                        </BotoesDiv>
                    </Col>
                    <Col md={8}>
                        <TabelaD>
                        <Tabela>
                            <TabelaHead>
                                <TabelaRow>
                                    <TabelaH>ID</TabelaH>
                                    <TabelaH>Data</TabelaH>
                                    <TabelaH>Feedback</TabelaH>
                                </TabelaRow>
                            </TabelaHead>
                            <tbody>
                            {feedback.map((fb, i) => (
                                <TabelaRow key={i}>
                                    <TabelaData>{fb.identificacao}</TabelaData>
                                    <TabelaData>R$ {fb.quantia}</TabelaData>
                                    <TabelaData>{fb.status}</TabelaData>
                                </TabelaRow>
                            ))}
                            </tbody>
                        </Tabela>
                        </TabelaD>
                    </Col>
                </Row>
            </Container>
        </Body>
    )
}

export default AdminFeedback